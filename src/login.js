import React from "react";
import "./css/login.css";
// import { CircularProgress } from "@material-ui/core";

const Login = () => {


  return (
    <div>
    <div className="loginpage-container">
      <form className="form" >
        <h2 className="sign-in">Login</h2>
        <div className="form-control">
          <label htmlFor="email" style={{color: "#fff"}}>Your email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password" style={{color: "#fff"}}>Your password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            id="password"
            required
          />
        </div>
        <div className="button" >
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;