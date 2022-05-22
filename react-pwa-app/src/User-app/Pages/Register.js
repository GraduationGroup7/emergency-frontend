import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../../Components/TextInput";
import Button from "../../Components/Button";

export default function Register() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [bloodValue, setBloodValue] = useState("");
  const [phoneNumberValue, setPhoneNumberValue] = useState("");
  const [IDValue, setIDValue] = useState("");
  const [nationalityValue, setNationalityValue] = useState("");
  return (
    <div className="general-mobile-container registration-form-container">
      <h1 className="registration-form-title">Create an Account</h1>

      <TextInput
        image="/Images/Person.svg"
        placeHolder="Name"
        type="text"
        inputValue={nameValue}
        setInputValue={setNameValue}
      ></TextInput>
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
      <TextInput
        image="/Images/location.svg"
        placeHolder="Address"
        type="text"
        inputValue={addressValue}
        setInputValue={setAddressValue}
      ></TextInput>
      <TextInput
        image="/Images/Blood.svg"
        placeHolder="Blood Type"
        type="text"
        inputValue={bloodValue}
        setInputValue={setBloodValue}
      ></TextInput>
      <TextInput
        image="/Images/Phone.svg"
        placeHolder="Phone Number"
        type="number"
        inputValue={phoneNumberValue}
        setInputValue={setPhoneNumberValue}
      ></TextInput>
      <TextInput
        image="/Images/person.svg"
        placeHolder="ID/Passport"
        type="text"
        inputValue={IDValue}
        setInputValue={setIDValue}
      ></TextInput>
      <TextInput
        image="/Images/Globe.svg"
        placeHolder="Nationality"
        type="text"
        inputValue={nationalityValue}
        setInputValue={setNationalityValue}
      ></TextInput>
      <Button buttonText="Recieve SMS"></Button>
      <Link className="label acct-label" to="/">
        Need an Account?
      </Link>
      <Button buttonText="Login as guest"></Button>
    </div>
  );
}
