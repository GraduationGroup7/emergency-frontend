import React from "react";
import Images from "../Images/logo-svg.svg";

function Login() {
  return (
    <>
      <img src={Images} alt="" className="logo" />
      <h1 className="title">Login</h1>
      <p className="label">
        Enter your login details to sign in to your account
      </p>
      <input type="text" className="email" placeholder="Email" />
      <input type="text" className="password" />
      <button className="login-button">Login</button>
      <a href="" className="social-links"></a>
      <a href="" className="social-links"></a>
      <a href="" className="social-links"></a>
      <p className="label">Need an Account?</p>
      <button className="guest-button">Login as a Guest</button>
    </>
  );
}

export default Login;
