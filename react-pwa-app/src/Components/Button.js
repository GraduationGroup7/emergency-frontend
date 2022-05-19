import React from "react";

//when you are done with the button component be sure to delete the login-button css class !!

// the button expects {extraClasses, onClick, buttonText}
export default function Button(props) {
  return (
    <button
      className={props.extraClasses ? `${props.extraClasses} button` : "button"}
      onClick={props.onClick}
    >
      {props.buttonText}
    </button>
  );
}
