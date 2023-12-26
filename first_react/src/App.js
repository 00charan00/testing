import './App.css';
import{ useState} from "react";


function App() {
  // const age=0;
  const[inc,incrementFun]=useState(0);
  const [ipvalue,stateFun]=useState("");
  const[toggletext,toggleFun]=useState(true)

  const display=(event)=>{
    stateFun(event.target.value)
  }
  const increment=()=>{
    incrementFun(inc+1)
  }
  const toggle=()=>{
    toggleFun(!toggletext)
    

  }


  return (
    <div className="App">
      </h1>
      
    <input type="text" onChange={display}/>
    {ipvalue}
    <button onClick={increment}>button</button>
    {inc}

    <button onClick={toggle}>hide/show</button>
    {toggletext===true && <h1>charan</h1>}

    </div>
  );
}

export default App;
