import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { updateError } from "../redux/errorInfoSlice";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toggle } from "../redux/successInfoSlice";
// techError == error.message
// descriptiveError == error.data.data

export default function GeneralFeedbackToast() {
  const errorInfo = useSelector((state) => state.errorInfo.value);
  const successInfo = useSelector((state) => state.successInfo.value);
  const dispatch = useDispatch();
  const options = {
    onOpen: (props) => console.log(props.foo),
    onClose: (props) => console.log(props.foo),
    autoClose: 2000,
    type: toast.TYPE.INFO,
    hideProgressBar: false,
    position: toast.POSITION.TOP_CENTER,
    pauseOnHover: true,
    closeButton: false,
    // and so on ...
  };
  useEffect(() => {
    console.log("error info ", errorInfo);
    if (successInfo) {
      options.type = toast.TYPE.SUCCESS;
      options.onClose = (props) => {
        dispatch(toggle());
      };

      toast("Operation Success!", options);
    } else if (errorInfo.techError) {
      options.type = toast.TYPE.ERROR;
      options.onClose = (props) => {
        dispatch(updateError({}));
      };

      toast(errorInfo.techError, options);
    }
  }, [errorInfo, successInfo]);

  // @TODO: try to elemenate the use of extra state and trigger rerendering on redux state change. (Hint, it is prolly immutability of state changing in reducer)
  return <ToastContainer />;
}
