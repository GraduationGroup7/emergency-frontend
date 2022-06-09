import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../../Components/TextInput";
import MyButton from "../../Components/MyButton";
import { register_customer } from "../../API/API";

export default function Register() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [bloodValue, setBloodValue] = useState("");
  const [phoneNumberValue, setPhoneNumberValue] = useState("");
  const [IDValue, setIDValue] = useState("");
  const [nationalityValue, setNationalityValue] = useState("");
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [dayValue, setDayValue] = useState("");
  const [monthValue, setMonthValue] = useState("");
  const [yearValue, setYearValue] = useState("");

  // primary key is "Email"
  const onSubmit = async () => {
    let obj = {
      first_name: firstNameValue,
      last_name: lastNameValue,
      email: emailValue,
      password: passwordValue,
      password_confirmation: passwordValue,
      dob: `${yearValue}-${monthValue}-${dayValue}`,
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
      <MyButton buttonText="Recieve SMS"></MyButton>
      <Link className="label acct-label" to="/">
        Need an Account?
      </Link>
      <MyButton buttonText="Login as guest"></MyButton>
    </div>
  );
}
