import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function useIsAuthenticated() {
  // I am authenticating by getting the path name and checking if it matches the redux contents
  const userInfo = useSelector((state) => state.userInfo.value);
  const authToken = localStorage.getItem("authToken");
  const location = useLocation();
  let path = location.pathname.split("/");
  let appletName = path[1];
  let formType = path[2];

  console.log(path);
  console.log("applet name: ", appletName);

  console.log(appletName);
  if (
    appletName === "" ||
    appletName === "login" ||
    appletName === "register" ||
    !appletName
  ) {
    console.log("pages that dont require authentication");
    return true;
  }

  // check authorization for forms
  if (formType === "agents" || formType === "emergencies") {
    return userInfo.type === "authority" || userInfo.type === "admin";
  } else if (formType === "authorities" || formType === "customers") {
    return userInfo.type === "admin";
  } else if (formType === "sms-verify") {
    return localStorage.getItem("authToken");
  }

  if (!authToken) {
    console.log("user doesnt have an authToken");
    return false;
  }

  if (userInfo.type !== appletName) {
    console.log("user is trying to access a page he is not allowed to");
    return false;
  }

  // return authenticated when it passes all checks
  return true;
}
