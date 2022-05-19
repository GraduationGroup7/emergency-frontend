import React, { useState } from "react";

// props expecting {image, placeHolder, type}
export default function TextInput(props) {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="text-input-container">
      {props.image && (
        <img src={props.image} alt="" className="text-input-svg" />
      )}
      <input
        type={props.type}
        className="text-input"
        placeholder={props.placeHolder}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </div>
  );
}
