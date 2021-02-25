import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import jwt from "jsonwebtoken";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/login", { email, password })
      .then((response) => {
        console.log(response.data);
        jwt.verify(
          response.data.token,
          process.env.REACT_APP_SECRET,
          (err, decoded) => {
            if (err) {
              console.log(err);
            } else {
              setUser({ _id: decoded._id });
              history.push("/admin");
            }
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1 className="center-align">Welcome! Please login to continue</h1>
        </div>
      </div>
      <div className="row">
        <form className="col s12" onSubmit={handleFormSubmit}>
          <div className="row">
            <div className="col s3"></div>
            <div className="input-field col s6">
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="title">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="col s3"></div>
            <div className="input-field col s6">
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label htmlFor="title">Password</label>
            </div>
          </div>
          <div className="row center-align">
            <button className="waves-effect waves-light btn">Sign in!</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
