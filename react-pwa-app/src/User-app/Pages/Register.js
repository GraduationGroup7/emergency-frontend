import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { register_customer } from "../../API/API";
import { Form, Button } from "react-bootstrap";

export default function Register() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [phoneNumberValue, setPhoneNumberValue] = useState("");
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [dobValue, setDobValue] = useState("");

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
      password_confirmation: passwordValue,
      dob: dobValue,
      type: "user",
    };
    let response = await register_customer(obj);
    if (!response.data) {
      // msg failed
      return;
    }
    if (response.data.token) {
      console.log("Register successful!");
      localStorage.setItem("authToken", response.data.token);
    } else {
      if (response.data.email) {
        // response.data.email <--- is the error message from the backend
        console.log(response.data.email);
      }
    }
  };

  return (
    <div className="general-mobile-container registration-form-container">
      <h1 className="registration-form-title">Create an Account</h1>

      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
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
            type="text"
            placeholder="Enter Last Name"
            value={lastNameValue}
            onChange={(e) => setLastNameValue(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Phone Number"
            value={phoneNumberValue}
            onChange={(e) => setPhoneNumberValue(e.target.value)}
          />
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
        <Form.Group className="mb-3" controlId="formBasicDoB">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
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
      <Link className="label acct-label" to="/">
        Need an Account?
      </Link>
    </div>
  );
}
