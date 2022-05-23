import React, { useState } from "react";
import MyButton from "../Components/MyButton";
import { useNavigate } from "react-router-dom";
import TextInput from "../Components/TextInput";

function Login() {
  let navigate = useNavigate();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  return (
    <>
      <div className="general-mobile-container main-container">
        <img src="/Images/logo-svg.svg" alt="" className="logo" />
        <div className="main-header">
          <h1 className="title">Login</h1>
          <p className="label">
            Enter your login details to sign in to your account
          </p>
        </div>

        <TextInput
          image="/Images/Mail.svg"
          placeHolder="Email"
          type="email"
          inputValue={emailValue}
          setInputValue={setEmailValue}
        ></TextInput>
        <TextInput
          image="/Images/lock.svg"
          placeHolder="Password"
          type="password"
          inputValue={passwordValue}
          setInputValue={setPasswordValue}
        ></TextInput>
        <MyButton
          onClick={() => {
            navigate("/user/register");
          }}
          extraClasses="login-button"
          buttonText="login"
        ></MyButton>
        <div className="social-container">
          <a href="" className="social-links">
            <img src="/Images/facebook.svg" alt="" />
          </a>
          <a href="" className="social-links">
            <img src="/Images/twitter.svg" alt="" />
          </a>
          <a href="" className="social-links">
            <img src="/Images/g+.svg" alt="" />
          </a>
        </div>
        <p className="label acct-label">Need an Account?</p>
        <button className="guest-button button">Login as a Guest</button>
      </div>
    </>
  );
}

export default Login;
