import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const [user, setUser] = useState({
    Name: "",
    Age: "",
    Salary: ""
  });
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3004/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {user.Name}</li>
        <li className="list-group-item">Age: {user.Age}</li>
        <li className="list-group-item">Salary: {user.Salary}</li>
      </ul>
    </div>
  );
};

export default Details;