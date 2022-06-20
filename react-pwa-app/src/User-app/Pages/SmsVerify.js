import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { sms_verify } from "../../API/API";
import { Form, Button } from "react-bootstrap";
import GeneralErrorAlert from "../../Components/GeneralErrorAlert";
export default function SmsVerify() {
  const [verificationCode, setVerificationCode] = useState("");
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  let { id, request_id } = useParams();

  async function onSubmit(e) {
    e.preventDefault();
    let requestBody = {
      request_id: request_id,
      code: verificationCode,
      id,
    };
    try {
      let smsVerificationResponse = await sms_verify(requestBody);
      navigate("/");
    } catch (error) {
      setErrorMsg(
        error.response.data
          ? `${error.message}, ${error.response.data.message}`
          : error.message
      );
    }
  }
  return (
    <div className="general-mobile-container sms-verify-container">
      <GeneralErrorAlert
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
      ></GeneralErrorAlert>
      <img src="/Images/logo-svg.svg" alt="" className="logo" />
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicSmsVerification">
          <Form.Label>Enter The Code You Recieved</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Verify and Sign-up
        </Button>
      </Form>
      {/* remember that now only rerouting to the login is enough to logout (bcz login auto deletes authToken) */}
      <Link className="label acct-label" to="/">
        Cancel
      </Link>
    </div>
  );
}
