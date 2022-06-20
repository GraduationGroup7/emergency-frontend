import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { updateError } from "../redux/errorInfoSlice";
import { useSelector, useDispatch } from "react-redux";

// techError == error.message
// descriptiveError == error.data.data

export default function GeneralErrorAlert() {
  const errorInfo = useSelector((state) => state.errorInfo.value);
  const dispatch = useDispatch();

  // @TODO: try to elemenate the use of extra state and trigger rerendering on redux state change. (Hint, it is prolly immutability of state changing in reducer)
  // useEffect(() => {
  //   // somehow the component doesnt rerender when the redux state changes???
  //   console.log("component re-rendered");
  // }, []);
  // useEffect(() => {
  //   console.log("error Info changed: ", errorInfo);
  // }, [errorInfo]);
  return (
    <Alert
      show={errorInfo.techError != undefined}
      variant="danger"
      onClose={() => dispatch(updateError({}))}
      dismissible
    >
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>{`${errorInfo.techError}, ${errorInfo.descriptiveError} `}</p>
    </Alert>
  );
}
