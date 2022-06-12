import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login, get_user_info } from "../API/API";
import { Form, Button, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeType } from "../redux/userTypeSlice";

function Login() {
  let navigate = useNavigate();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [show, setShow] = useState(false);
  const userType = useSelector((state) => state.userType.value);
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    let response = await login({ email: emailValue, password: passwordValue });
    response = response.data;
    console.log(response);
    if (response.accessToken) {
      localStorage.setItem("authToken", response.accessToken);
      navigate(`/${response.userData.type}/`);
      dispatch(changeType(response.userData.type));
      console.log("Login was Successful");
    } else {
      setErrorMsg(response.message);
      setShow(true);
    }
  };

  return (
    <>
      <Alert
        show={show}
        variant="danger"
        onClose={() => setShow(false)}
        dismissible
      >
        <Alert.Heading>You got an error! Try Again </Alert.Heading>
        <p>{errorMsg}</p>
      </Alert>
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
          <p className="label acct-label">Need an Account?</p>
        </Link>
      </div>
    </>
  );
}

export default Login;
