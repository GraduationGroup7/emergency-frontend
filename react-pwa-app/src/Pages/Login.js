import React from "react";
import Images from "../Images/logo-svg.svg";
import LogoPNG from "../Images/logo-png.png";
import EmailSVG from "../Images/Mail.svg";
import LockSVG from "../Images/Lock.svg";
import FacebookSVG from "../Images/facebook.svg";
import TwitterSVG from "../Images/twitter.svg";
import GPlusSVG from "../Images/g+.svg";

function Login() {
  return (
    <>
      <div className="main-container">
        <img src={LogoPNG} alt="" className="logo" />
        <div className="main-header">
          <h1 className="title">Login</h1>
          <p className="label">
            Enter your login details to sign in to your account
          </p>
        </div>

        <div className="email">
          <img src={EmailSVG} alt="" className="email-svg" />
          <input type="text" className="email-input" placeholder="Email" />
        </div>
        <div className="password">
          <img src={LockSVG} alt="" className="email-svg" />
          <input
            type="password"
            className="password-input"
            placeholder="Password"
          />
        </div>
        <button className="login-button button">Login</button>
        <div className="social-container">
          <a href="" className="social-links">
            <img src={FacebookSVG} alt="" />
          </a>
          <a href="" className="social-links">
            <img src={TwitterSVG} alt="" />
          </a>
          <a href="" className="social-links">
            <img src={GPlusSVG} alt="" />
          </a>
        </div>
        <p className="label acct-label">Need an Account?</p>
        <button className="guest-button button">Login as a Guest</button>
      </div>
    </>
  );
}

export default Login;
