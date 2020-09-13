import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3004/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3004/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.Name}</td>
                <td>{user.Age}</td>
                <td>{user.Salary}</td>
                <td>
                  <Link className="btn btn-warning mr-2" to={`/users/${user.id}`}>View</Link>
                  <Link className="btn btn-success mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                  <Link className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;