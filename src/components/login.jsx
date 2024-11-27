
  import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://backend-capstone-4-3jx1.onrender.com/auth/login", {
        username,
        password,
      })
      .then((result) => {
        window.localStorage.setItem("id", result.data.id);
        navigate("/");
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-item-center vh-100">
      <div className="p-3 border border-1 w-25">
        <h3>Register</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter UserName "
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            ></input>

            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter password "
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button className="btn btn-success w-100">Login</button>

          <Link to="/auth/register">
            <button className="btn btn-default w-100 mt-2">register</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default login;


