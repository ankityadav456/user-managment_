import React, { useState, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom";
import { listContext } from "../App";


const ViewEmp = () => {

  const {emplyList, setEmpList} = useContext(listContext);
  const [viewData, setViewData] = useState("");
  
  const {id} = useParams();
  
  useEffect(() => {

    if(id){
      const FilterData = emplyList?.filter((_, index)=> index+1 == id);
      console.log(FilterData);
      setViewData(FilterData[0]);
    }

  },[id]);


  // console.log(param);
    

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-12  px-4 ">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h4 className="m-0">EMPLOYEE LIST VIEW</h4>
              {/* <NavLink to="/add" className="btn btn-primary">
                CREATE NEW
              </NavLink> */}
            </div>
            <div className="card-body">
              <div className="table-responsive">
              <table className="table table-striped" id="listTable">
                <thead>
                  <tr>
                    <th className="text-center">NAME</th>
                    <th className="text-center">ID</th>
                    <th className="text-center">DESIGNATION</th>
                    <th className="text-center">EMAIL</th>
                  </tr>
                </thead>
                <tbody>
                      <tr>
                        <th className="text-center">{viewData?.EmployeeName}</th>
                        <td className="text-center">{viewData?.EmployeeId}</td>
                        <td className="text-center">{viewData?.Designation}</td>
                        <td className="text-center">{viewData?.Email}</td>
                      </tr>
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewEmp
