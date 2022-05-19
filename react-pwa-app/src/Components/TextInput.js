import React, { useState } from "react";

// props expecting {image, placeHolder, type, inputValue, setInputValue}
export default function TextInput(props) {
  return (
    <div className="text-input-container">
      {props.image && (
        <img src={props.image} alt="" className="text-input-svg" />
      )}
      <input
        type={props.type}
        className="text-input"
        placeholder={props.placeHolder}
        value={props.inputValue}
        onChange={(e) => {
          props.setInputValue(e.target.value);
        }}
      />
    </div>
  );
}
