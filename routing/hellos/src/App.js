import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import { PageOne } from "./pone";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
          <Route path="*" element={<h1>error 404</h1>}/>
          <Route path="/pageone" element={<PageOne/>}/>
          {/* <Route path="/pagetwo" element={<PageTwo/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
