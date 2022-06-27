import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import GeneralFeedbackToast from "../Components/GeneralFeedbackToast";
import useIsAuthenticated from "../Util/useIsAuthenticated";
import NoPermission from "./NoPermission";

export default function MainWrapper() {
  const isAuthenticated = useIsAuthenticated();
  const [authToken, setAuthToken] = useState(isAuthenticated);
  useEffect(() => {
    setAuthToken(isAuthenticated);
  }, [isAuthenticated]);
  return (
    <>
      <GeneralFeedbackToast></GeneralFeedbackToast>
      {authToken ? (
        <>
          <Outlet></Outlet>
        </>
      ) : (
        <NoPermission></NoPermission>
      )}
    </>
  );
}
