import React, { useContext, useEffect, useState } from "react";
import { listContext } from "../App";
const AddEmp = () => {


  const { emplyList, setEmpList } = useContext(listContext);

  const [formValue, setFormValue] = useState({
    EmployeeName: "",
    EmployeeId: "",
    Designation: "",
    Email: ""

  });


  // con


  const handleSubmit = (e) => {
    e.preventDefault();
    setEmpList([...emplyList, formValue]);
    setFormValue({
    EmployeeName: "",
    EmployeeId: "",
    Designation: "",
    Email: ""
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  // console.log('emplo-list',emplyList)

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="m-0">ADD EMPLOYEE</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-3">
                    <label className="fw-bold">Employees</label>
                    <input className="form-control" name="EmployeeName" onChange={handleChange} placeholder="Employee Name" value={formValue?.EmployeeName} />
                  </div>
                  <div className="col-3">
                    <label className="fw-bold">Employee Id</label>
                    <input className="form-control" name="EmployeeId" onChange={handleChange} placeholder="Employee Name" value={formValue?.EmployeeId} />
                  </div>
                  <div className="col-3">
                    <label className="fw-bold">Designation</label>
                    <input className="form-control" name="Designation" onChange={handleChange} placeholder="Employee Name" value={formValue?.Designation} />
                  </div>
                  <div className="col-3">
                    <label className="fw-bold">Email</label>
                    <input className="form-control" name="Email" value={formValue?.Email} onChange={handleChange} placeholder="Employee Name" />
                  </div>
                  <div className="col-3">
                    <label className="fw-bold">Eduction</label>
                    <input className="form-control" name="Eduction" onChange={handleChange} placeholder="Employee Name" />
                  </div>
                  <div className="col-3">
                    <label className="fw-bold">Address</label>
                    <input className="form-control" name="Address" onChange={handleChange} placeholder="Employee Name" />
                  </div>
                  <div className="col-3">
                    <label className="fw-bold">Performance</label>
                    <select className="form-select" name="Performance" onChange={handleChange} placeholder="Employee Name">
                      <option value=''>Select</option>
                      <option>Excellent</option>
                      <option>Normal</option>
                      <option>Average</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 d-flex justify-content-end align-items-center">
                    <button className="btn btn-primary" type="submit" >Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default AddEmp;