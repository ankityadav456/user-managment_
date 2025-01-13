import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { listContext } from "../App";

const ListEmp = () => {

  const [counter, setCounter] = useState(0);

  // const { emplyList, setEmpList } = useContext(listContext);
  // const navigate = useNavigate();

  // const handleView = (index) => {
  //   navigate(`/view/${index+1}`);
  // }


  // const handleDelete = (id) => {
  //   const FilterData = emplyList?.filter((_, index)=> index !== id);
  //   setEmpList(FilterData);
  //   console.log(FilterData);
  // }

  // const handleUpdate = (employe, index) =>{
  //   navigate('/add',{employe});
  // }

  useEffect( () => {
    console.log('Counter Mounted')
    console.log('user updated')

    return function(){
      console.log('unMounte counter')
    }
  }, [])

  useEffect( () => {
    console.log('Counter Mounted', counter)

    return function(){
      console.log('Counter UseEffect Return', counter)
    }
  }, [counter])

  const handelIncrement = () => {
    setCounter(counter + 1);
  };

  const handelDecrement = () => {
    if(counter === 0 ) return;
    setCounter(counter - 1)
  }

  // console.log('context', context);
  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-12  px-4 ">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h4 className="m-0">EMPLOYEE LIST</h4>
              <NavLink to="/add" className="btn btn-primary">
                CREATE NEW
              </NavLink>
            </div>
            <div className="card-body">
              <div className="table-responsive">
              {/* <table className="table table-striped" id="listTable">
                <thead>
                  <tr>
                    <th className="text-center">SR.NO</th>
                    <th className="text-center">NAME</th>
                    <th className="text-center">ID</th>
                    <th className="text-center">DESIGNATION</th>
                    <th className="text-center">EMAIL</th>
                    <th className="text-center">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                {emplyList?.map((employe, index) => {
                    return (
                      <tr key={index + 1}>
                        <th className="text-center">{index + 1}</th>
                        <td className="text-center">{employe?.EmployeeName}</td>
                        <td className="text-center">{employe?.EmployeeId}</td>
                        <td className="text-center">{employe?.Designation}</td>
                        <td className="text-center">{employe?.Email}</td>
                        <td className="text-center">
                          <i
                            className="fa-solid fa-eye pe-2 pointer text-primary pointer"
                            onClick={() => handleView(index)}
                          ></i>
                          <i
                            className="fa-solid fa-pen-to-square pe-2 cursor-pointer text-success pointer"
                            onClick={() => handleUpdate(employe, index)}
                          ></i>
                          <i
                            className="fa-solid fa-trash pe-2 cursor-pointer text-danger pointer"
                            onClick={() => handleDelete(index)}
                          ></i>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table> */}
              <button className="btn btn-primary me-3" onClick={handelIncrement}>
                Increment
              </button>
              <input className="me-3 from-orange-50" value={counter}/>
              <button className="btn btn-primary" onClick={handelDecrement}>
                Decrement
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListEmp;