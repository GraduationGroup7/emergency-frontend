import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Form, Button, Spinner, ToggleButton, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { get_form_format, update_item } from "../API/API";
import { updateError } from "../redux/errorInfoSlice";

export default function UpdateView({ formType, id }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState([]);
  const [formDataBackup, setFormDataBackup] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let res = await get_form_format(
          id === "create-form" ? `${formType}/${id}` : `${formType}/${id}/form`
        );
        // 1st one is axios, 2nd is kaan's middleware, 3rd is resources's data
        res = res.data.data;
        setFormData(res);
        setFormDataBackup(res);
        setLoading(false);
      } catch (error) {
        console.log("unsuccesful form fetch attempt ", error);
        dispatch(
          updateError({
            techError: error.message,
            descriptiveError: error.response.data.data,
          })
        );
      }
    })();
  }, []);

  const formFeildToObject = () => {
    let tempFormData = [...formData];
    let tempObj = {};
    tempFormData.forEach((field, index) => {
      tempObj[field.field] = field.value;
    });
    // console.log("tempObj", tempObj);
    return tempObj;
  };
  async function onSubmit(e) {
    e.preventDefault();
    let reqBody = formFeildToObject();
    // means we want to create a new user/authority/emergency
    if (id === "create_form") {
      console.log("you are trying to create a new item");
    } else {
      try {
        let res = await update_item(`${formType}/${id}`, reqBody);
      } catch (error) {
        console.log("unsuccesful update Attempt ", error);
        dispatch(
          updateError({
            techError: error.message,
            descriptiveError: error.response.data.data,
          })
        );
      }
    }
  }

  const updateFormField = (field, value) => {
    console.log(field, value);
    let newFormData = [...formData];

    newFormData = newFormData.map((f) => {
      return { ...f, value: f.field === field ? value : f.value };
    });

    setFormData(newFormData);
  };

  const formView = formData.map((field, index) => {
    return (
      <Form.Group
        as={Col}
        md={6}
        key={index}
        className="mb-3"
        controlId="formBasicEmail"
      >
        <Form.Label>{field.title}</Form.Label>
        {field.type === "checkbox" ? (
          <Form.Control
            type={field.type}
            placeholder={`Enter ${field.title}`}
            checked={true}
            disabled={field.disabled}
            onChange={(e) => {
              updateFormField(field.field, e.target.value);
            }}
          />
        ) : (
          <Form.Control
            type={field.type}
            placeholder={`Enter ${field.title}`}
            value={field.value === null ? undefined : field.value}
            disabled={field.disabled}
            onChange={(e) => {
              updateFormField(field.field, e.target.value);
            }}
          />
        )}
      </Form.Group>
    );
  });
  return (
    <>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Form onSubmit={onSubmit}>
          {formView}
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      )}
    </>
  );
}
