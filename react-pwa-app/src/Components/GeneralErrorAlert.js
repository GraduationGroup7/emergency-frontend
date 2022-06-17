import React, { useState } from "react";
import { Alert } from "react-bootstrap";

// I am only using the error message for everything, it might be confusing but this way I only need 2 prop instead of 3

export default function GeneralErrorAlert({ errorMsg, setErrorMsg }) {
  return (
    <Alert
      show={errorMsg}
      variant="danger"
      onClose={() => setErrorMsg("")}
      dismissible
    >
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>{errorMsg}</p>
    </Alert>
  );
}
