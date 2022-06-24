import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MyModal from "../../Components/MyModal";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  Form,
  NavDropdown,
  FormControl,
  Button,
  InputGroup,
  Alert,
} from "react-bootstrap";
import { create_emergency } from "../../API/API";
import { Link, useNavigate } from "react-router-dom";

const emergency_types = ["Fire", "Medical", "Crime", "Accidents", "Other"];

const axios = require("axios").default;
export default function Report() {
  const [canvasShow, setCanvasShow] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [files, setFiles] = useState([]);
  const [emergencyDescription, SetEmergencyDescription] = useState("");
  const [emergencyType, setEmergencyType] = useState(0);
  const [reportError, setReportError] = useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const handleClose = () => setCanvasShow(false);
  const handleShow = () => setCanvasShow(true);

  // detials found here: https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs
  function findCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        let newPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        console.log(position);
        setCoordinates(newPosition);
      },
      function(error) {
        setReportError(error.message);
      }
    );
  }

  useEffect(() => {
    console.log(files);
  }, [files]);

  const { register, handleSubmit } = useForm();

  const uploadFiles = async () => {
    //details on this implementation found here: https://refine.dev/blog/how-to-multipart-file-upload-with-react-hook-form/
    //details on how to upload multipls files here: https://stackoverflow.com/questions/12989442/uploading-multiple-files-using-formdata
    const formData = new FormData();
    for (let file of files) {
      console.log(file);
      formData.append("files[]", file);
    }
    const res = await fetch("http://localhost:5000/upload-file", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    alert(JSON.stringify(`${res.message}, status: ${res.status}`));
  };

  const onSubmit = async (e) => {
    /* Backend requirements
      img_array,
      latitude,
      longitude,
      description,
      emergency_type_id,
      video,
      sound recording,
      time,
    */
    console.log(e);

    let time = new Date();

    const formData = new FormData();
    for (let file of files) {
      console.log(file);
      formData.append(file.name, file);
    }
    const info = {
      latitude: coordinates.lat,
      longitude: coordinates.lng,
      latitude: 1,
      longitude: 2,
      description: emergencyDescription,
      time: time.getTime(),
      emergency_type_id: emergencyType,
    };

    Object.keys(info).forEach((key) => {
      formData.append(key, info[key]);
    });
    try {
      await create_emergency(formData);
      // emergency created successfully
      setModalShow(true);
      setCanvasShow(false);
    } catch (error) {
      //error occured
      console.log(error);
      setCanvasShow(false);
      setReportError(error.message);
    }
  };
  return (
    <>
      <>
        {/* alert to prompt the user to try posting the emergency again */}
        {reportError && (
          <Alert
            variant="danger"
            onClose={() => setReportError("")}
            dismissible
          >
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>detailed error is: {reportError}</p>
          </Alert>
        )}
        <div className="main-content d-flex justify-content-center flex-column align-items-center m-auto">
          <h1>Emergency Assitance Needed?</h1>
          <h5>Press the button to report an emergency</h5>
          <Button
            variant="primary"
            onClick={handleShow}
            className="main-content__button"
          >
            Report an Emergency
          </Button>
        </div>

        {/* modal to show that you have reported successfully */}
        <MyModal show={modalShow} onHide={() => setModalShow(false)} />

        {/* offcanvas conatianing the form to submit the emergency */}
        {/* made off canvas bigger i.e. fit the content by adding "h-auto"  */}
        <Offcanvas
          show={canvasShow}
          onHide={handleClose}
          placement="bottom"
          className="h-auto"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Send Report</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* images upload form */}
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3">
                <Form.Select
                  aria-label="Default select example"
                  value={emergencyType}
                  onChange={(e) => setEmergencyType(e.target.value)}
                >
                  {emergency_types.map((elem, index) => {
                    return (
                      <option key={nanoid()} value={index}>
                        {elem}
                      </option>
                    );
                  })}
                </Form.Select>
                <Form.Text>Choose the Kind of Emergency</Form.Text>
              </Form.Group>
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Control
                  type="file"
                  multiple
                  {...register("files")}
                  onChange={(e) => setFiles(e.target.files)}
                />
                <Form.Text>You can Upload Multiple files</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Control
                  type="text"
                  placeholder="Emergency Description"
                  value={emergencyDescription}
                  onChange={(e) => SetEmergencyDescription(e.target.value)}
                />
                <Form.Text>Please be as descriptive as possible</Form.Text>
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </>
  );
}
