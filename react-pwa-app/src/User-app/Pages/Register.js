import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { register_customer } from "../../API/API";
import { Form, Button } from "react-bootstrap";
import { updateError } from "../../redux/errorInfoSlice";
import { useDispatch } from "react-redux";

export default function Register() {
  const dispatch = useDispatch();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [phoneNumberValue, setPhoneNumberValue] = useState("");
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [dobValue, setDobValue] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    // code used to set an authtoken for testing purposes
    // localStorage.setItem(
    //   "authToken",
    //   "19|xHyc2VPXG7GS2h1qK0U7rKz0m0PAFQjR5jRYCVpm"
    // );
  }, []);
  // primary key is "Email"
  const onSubmit = async (e) => {
    e.preventDefault();
    let obj = {
      first_name: firstNameValue,
      last_name: lastNameValue,
      email: emailValue,
      password: passwordValue,
      phone_number: phoneNumberValue,
      password_confirmation: passwordValue,
      dob: dobValue,
      type: "user",
    };
    try {
      let response = await register_customer(obj);
      response = response.data;
      // localStorage.setItem("authToken", response.data.token);
      // console.log("response is: ", response);
      // console.log("response data is: ", response.data);
      // console.log("response request_id is: ", response.data.request_id);
      // console.log("response user id is: ", response.data.user.id);

      navigate(
        `/user/sms-verify/${response.data.request_id}/${response.data.user.id}`
      );
    } catch (error) {
      console.log("error", error);
      dispatch(
        updateError({
          techError: error.message,
          descriptiveError: error.response.data.data,
        })
      );
    }
  };

  return (
    <>
      <div className="general-mobile-container registration-form-container">
        <h1 className="registration-form-title">Create an Account</h1>

        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              value={emailValue}
              onChange={(e) => {
                setEmailValue(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter First Name"
              value={firstNameValue}
              onChange={(e) => {
                setFirstNameValue(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Last Name"
              value={lastNameValue}
              onChange={(e) => setLastNameValue(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Enter Phone Number"
              value={phoneNumberValue}
              onChange={(e) => setPhoneNumberValue(e.target.value)}
            />
            <Form.Text>Make sure the number starts with 90</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDoB">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Enter Date"
              value={dobValue}
              onChange={(e) => setDobValue(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </>
  );
}
