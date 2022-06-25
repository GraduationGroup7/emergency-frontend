import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import UpdateView from "../../Components/UpdateView";

export default function AdminForm() {
  let { formType, id } = useParams();
  return (
    <>
      <h1>Put your extra tags here</h1>
      <UpdateView formType={formType} id={id}></UpdateView>
    </>
  );
}
