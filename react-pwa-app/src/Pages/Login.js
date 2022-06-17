import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login, get_user_info } from "../API/API";
import { Form, Button, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../redux/userInfoSlice";
import GeneralErrorAlert from "../Components/GeneralErrorAlert";

function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // this way any component can just reroute to login to "logout"
    localStorage.removeItem("authToken");
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await login({
        email: emailValue,
        password: passwordValue,
      });
      response = response.data;
      console.log("this is the response: ", response);
      localStorage.setItem("authToken", response.accessToken);
      let userInfoRequest = await get_user_info();

      userInfoRequest = userInfoRequest.data;
      dispatch(updateUser(userInfoRequest.data));
      navigate(`/${response.userData.type}/`);
      console.log("Login was Successful");
    } catch (error) {
      console.log("unsuccesful Login Attempt ", error);
      setErrorMsg(
        error.response.data
          ? `${error.message}, ${error.response.data.data}`
          : error.message
      );
    }
  };

  return (
    <>
      <GeneralErrorAlert
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
      ></GeneralErrorAlert>
      <div className="general-mobile-container main-container">
        <img src="/Images/logo-svg.svg" alt="" className="logo" />
        <div className="main-header">
          <h1 className="title">Login</h1>
          <p className="label">
            Enter your login details to sign in to your account
          </p>
        </div>

        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
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
        <Link to={"/user/register"}>
          <p className="label acct-label">Register a New User</p>
        </Link>
      </div>
    </>
  );
}

export default Login;
