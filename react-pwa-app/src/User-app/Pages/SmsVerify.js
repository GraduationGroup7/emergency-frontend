import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { resend_code, sms_verify } from "../../API/API";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateError } from "../../redux/errorInfoSlice";
import { toggle } from "../../redux/successInfoSlice";

export default function SmsVerify() {
  const [verificationCode, setVerificationCode] = useState("");
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
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
    <div className="general__mobile__container">
      <div className="text-center">
        <h1 className="general__mobile__title">Verify Phone</h1>
        <p className="general__mobile__subtitle">Verification code was sent</p>
      </div>
      <Form onSubmit={onSubmit}>
        <Form.Group
          className="my-5 text-center"
          controlId="formBasicSmsVerification"
        >
          <Form.Control
            required
            className="general__mobile__input mb-2"
            type="number"
            placeholder="Enter Code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          className="general__mobile__button mb-2"
          type="submit"
        >
          Verify and Sign-up
        </Button>
      </Form>
      {/* remember that now only rerouting to the login is enough to logout (bcz login auto deletes authToken) */}
      <Link className="label acct-label text-decoration-none" to="/">
        Cancel
      </Link>
    </div>
  );
}
