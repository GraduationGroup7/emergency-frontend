import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyButton from "../../Components/MyButton";
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
      <MyButton buttonText="Confirm & Sign Up"></MyButton>
      <Link className="label acct-label" to="/">
        Cancel
      </Link>
    </div>
  );
}
