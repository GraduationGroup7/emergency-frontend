import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login, get_user_info } from "../API/API";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/userInfoSlice";
import GeneralErrorAlert from "../Components/GeneralErrorAlert";
import { updateError } from "../redux/errorInfoSlice";
import config from "../API/config.json";
import { pusher } from "../App";

function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo.value);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

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

      const notification = pusher.subscribe(
        `private-notification.${userInfo.id}`
      );
      notification.bind("notification", (data) => {
        console.log("I am insideeeee");
        console.log("bind data ", data);
        let notification = new Notification("Message", {
          body: "this finally worked",
        });
      });
      navigate(`/${response.userData.type}/`);

      console.log("Login was Successful");
    } catch (error) {
      console.log("unsuccesful Login Attempt ", error);
      dispatch(
        updateError({
          techError: error.message,
          descriptiveError: error.response.data.data,
        })
      );
    }
  };

  return (
    <div className="login__parent__container">
      <div className="login__container">
        <img src="/Images/logo-svg.svg" alt="" className="logo" />
        <div className="login__form__container">
          <div className="main__header">
            <h1 className="main__header__title">Login</h1>
            <p className="main-header__text">
              Enter your login details to sign in to your account
            </p>
          </div>

          <Form className="form" onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="form__label">Email address</Form.Label>
              <Form.Control
                className="form__input"
                type="email"
                placeholder="Enter email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
              <Form.Text className="text-muted form__label">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="form__label">Password</Form.Label>
              <Form.Control
                className="form__input"
                type="password"
                placeholder="Password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
              />
            </Form.Group>
            <Button
              className="mb-2 submit__button"
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
            <Button
              className="mb-2 submit__button"
              variant="primary"
              onClick={(e) => {
                // you can check mdn notification documentation for implementation details
                console.log(Notification.permission);

                Notification.requestPermission();

                if (Notification.permission === "granted") {
                  console.log("notification access is granted");
                }
              }}
            >
              Get Notifications
            </Button>
          </Form>
          <Link to={"/user/register"} className="link__register">
            <p>Register a New User</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
