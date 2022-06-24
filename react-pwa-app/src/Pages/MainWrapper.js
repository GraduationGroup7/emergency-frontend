import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import GeneralErrorAlert from "../Components/GeneralErrorAlert";
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
      {authToken ? (
        <>
          <GeneralErrorAlert></GeneralErrorAlert>
          <Outlet></Outlet>
        </>
      ) : (
        <NoPermission></NoPermission>
      )}
    </>
  );
}
