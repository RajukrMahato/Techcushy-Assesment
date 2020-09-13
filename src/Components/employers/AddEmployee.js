import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddEmployee = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    Name: "",
    Age: "",
    Salary: ""
  });

  const { Name, Age, Salary } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3004/users", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="Name"
              value={Name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Age"
              name="Age"
              value={Age}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="Salary"
              className="form-control form-control-lg"
              placeholder="Enter Your Salary"
              name="Salary"
              value={Salary}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;