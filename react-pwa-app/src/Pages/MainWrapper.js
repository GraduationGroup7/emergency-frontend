import React from "react";
import { Outlet } from "react-router-dom";
import GeneralErrorAlert from "../Components/GeneralErrorAlert";

export default function MainWrapper() {
  return (
    <>
      <GeneralErrorAlert></GeneralErrorAlert>
      <Outlet></Outlet>
    </>
  );
}
