import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import UpdateView from "../../Components/UpdateView";

export default function AdminForm() {
  let { formType, id } = useParams();
  return (
    <div className="authority__form__container">
      <div className="authority__card">
        <h3>{formType}</h3>
        <UpdateView formType={formType} id={id}></UpdateView>
      </div>
    </div>
  );
}
