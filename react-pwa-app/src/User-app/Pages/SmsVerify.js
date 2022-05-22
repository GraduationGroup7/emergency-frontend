import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import TextInput from "../../Components/TextInput";

export default function SmsVerify() {
  const [verificationCode, setVerificationCode] = useState("");
  return (
    <div className="general-mobile-container sms-verify-container">
      <img src="/Images/logo-svg.svg" alt="" className="logo" />
      <p className="label">Enter the code recived form the SMS</p>
      <TextInput
        image="/Images/Hashtag.svg"
        placeHolder="Enter Code"
        type="number"
        inputValue={verificationCode}
        setInputValue={setVerificationCode}
      ></TextInput>
      <Button buttonText="Confirm & Sign Up"></Button>
      <Link className="label acct-label" to="/">
        Cancel
      </Link>
    </div>
  );
}
