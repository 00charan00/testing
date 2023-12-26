// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";

const EmployeeForm = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    designation: "",
    salary: "",
    dob: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Data sent to the server successfully");
      } else {
        console.error("Failed to send data to the server");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setEmployeeData((prevData) => [...prevData, formData]);
    setFormData({
      name: "",
      department: "",
      designation: "",
      salary: "",
      dob: "",
      address: "",
    });
  };

  useEffect(() => {
    // Fetch employee data from the server on component mount
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/employees");
        if (response.ok) {
          const data = await response.json();
          setEmployeeData(data);
        } else {
          console.error("Failed to fetch data from the server");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="employee-form-container">
      <div className="card form-container">
        <form onSubmit={handleSubmit}>
          {/* ... (Your input fields) */}
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="card table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>DOB</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.designation}</td>
                <td>{employee.salary}</td>
                <td>{employee.dob}</td>
                <td>{employee.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
