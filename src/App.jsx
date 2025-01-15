import React, { createContext, useState } from "react";
import Navbar from './Components/Navbar';
import ListEmp from './Components/ListEmp';
import AddEmp from './Components/AddEmp';
import Login from './Components/Login';
import ViewEmp from './Components/ViewEmp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const listContext = createContext();



function App() {
    const [state, setState] = useState(true)
  const[emplyList, setEmpList] = useState([]);
  return (
    <>
     {/* <button onClick={(e) => setState(!state)}>Toggle</button> */}
    <listContext.Provider value={{emplyList,setEmpList}}>
       <Router>
          <Navbar />
          <Routes>
            <Route path="/add" element={<AddEmp />}></Route>
            <Route path="/" element={state ? < ListEmp /> : ''}></Route>
            {/* <Route path="/add" element={<AddEmp />}></Route> */}
            <Route path="/view/:id" element={<ViewEmp />}></Route>
          </Routes>
        </Router>
    </listContext.Provider>
    </>

  )
}

export {listContext};

export default App;
