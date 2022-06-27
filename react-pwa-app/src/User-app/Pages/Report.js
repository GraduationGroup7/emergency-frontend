import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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
import { create_emergency, get_emergency_types } from "../../API/API";
import { Link, useNavigate } from "react-router-dom";
import { toggle } from "../../redux/successInfoSlice";
import { updateError } from "../../redux/errorInfoSlice";

const axios = require("axios").default;
export default function Report() {
  const [canvasShow, setCanvasShow] = useState(false);
  const [files, setFiles] = useState([]);
  const [emergencyDescription, SetEmergencyDescription] = useState("");
  const [emergencyType, setEmergencyType] = useState(0);
  const [emergencyTypes, setEmergencyTypes] = useState([]);
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const handleClose = () => setCanvasShow(false);
  const handleShow = () => setCanvasShow(true);

  const dispatch = useDispatch();

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
        dispatch(
          updateError({
            techError: error.message,
            descriptiveError: error.response.data.data,
          })
        );
      }
    );
  }

  useEffect(() => {
    console.log(files);
  }, [files]);

  useEffect(() => {
    (async () => {
      try {
        let emergency_types = await get_emergency_types();
        setEmergencyTypes(emergency_types.data.data);
        setEmergencyType(emergency_types.data.data[0].id);
        console.log(emergencyTypes);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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

    // findCurrentLocation();

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
      setCanvasShow(false);
      dispatch(toggle());
    } catch (error) {
      //error occured
      console.log(error);
      setCanvasShow(false);
      dispatch(
        updateError({
          techError: error.message,
          descriptiveError: error.response.data.data,
        })
      );
    }
  };
  return (
    <>
      <div className="general__mobile__container">
        <div className="text-center">
          <h1
            className="general__mobile__title mx-3"
            style={{ "font-size": "1.35rem" }}
          >
            Emergency Assistance Needed?
          </h1>
          <p className="general__mobile__subtitle">
            Press the button to report an emergency
          </p>
        </div>
        <div className="ripple__button__container">
          <div onClick={handleShow} className="ripple__effect__button">
            <i class="bi bi-broadcast"></i>
          </div>
        </div>

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
                  disabled={emergencyTypes.length <= 0}
                  value={emergencyType}
                  onChange={(e) => setEmergencyType(e.target.value)}
                >
                  {emergencyTypes.map((elem) => {
                    return (
                      <option key={nanoid()} value={elem.id}>
                        {elem.name}
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
                  required
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
      </div>
    </>
  );
}
