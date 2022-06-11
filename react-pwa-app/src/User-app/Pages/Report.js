import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../../redux/userSlice";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MyModal from "../../Components/MyModal";
import BottomOffCanvas from "../../Components/BottomOffCanvas";
import { useForm } from "react-hook-form";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
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
} from "react-bootstrap";
import { create_emergency } from "../../API/API";
import NoPermission from "../../Pages/NoPermission";

const emergency_types = {
  FIRE: 0,
  MEDICAL: 1,
  CRIME: 2,
  ACCIDENTS: 3,
  OTHER: 4,
};

const axios = require("axios").default;
export default function Report() {
  const user = useSelector((state) => state.user);
  const [canvasShow, setCanvasShow] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [files, setFiles] = useState([]);
  const [address, setAddress] = React.useState("");
  const [emergencyType, setEmergencyType] = useState(0);
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const dispatch = useDispatch();

  //making sure the user is logged in
  const authToken = localStorage.getItem("authToken");
  console.log("authToken is: ", authToken);

  const handleClose = () => setCanvasShow(false);
  const handleShow = () => setCanvasShow(true);

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

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
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  }

  useEffect(() => {
    // call a function in place !!!
    // (async () => {
    //   if (!files.length) return;
    //   let fileData = await files[0].arrayBuffer();
    //   let encodedFile = base64ArrayBuffer(fileData);
    //   console.log(encodedFile);
    //   axios
    //     .post("/user", {
    //       encodedFile,
    //     })
    //     .then(function(response) {
    //       console.log(files);
    //       console.log(response);
    //     })
    //     .catch(function(error) {
    //       console.log(files);
    //       console.log(error);
    //     });
    //   console.log(fileData);
    // })();
    console.log(files);
  }, [files]);

  const { register, handleSubmit } = useForm();

  const testFileOnSubmit = async () => {
    //details on this implementation found here: https://refine.dev/blog/how-to-multipart-file-upload-with-react-hook-form/
    //details on how to upload multipls files here: https://stackoverflow.com/questions/12989442/uploading-multiple-files-using-formdata
    const formData = new FormData();
    for (let file of files) {
      formData.append("files[]", file);
    }
    const res = await fetch("http://localhost:5000/upload-file", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    alert(JSON.stringify(`${res.message}, status: ${res.status}`));
  };

  const onSubmit = async (data) => {
    console.log(data);

    /* Backend info
      img_array,
      latitude,
      longitude,
      description,
      emergency_type_id,
      video,
      sound recording,
      time,
    */
    let response = await create_emergency("post", "emergencies", {
      img1: files[0],
      latitude: coordinates.lat,
      longitude: coordinates.lng,
      description: "test description",
      emergencyType,
    });
  };
  return (
    <>
      {authToken ? (
        <>
          <>
            {/* top navbar */}
            <Navbar key={false} bg="light" expand={false} className="mb-3">
              <Container fluid>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${false}`}
                />
                <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${false}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${false}`}
                    >
                      {user.name}
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#action1">Home</Nav.Link>
                      <Nav.Link href="#action2">Link</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                      <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        value={nameInput}
                        onChange={(e) => {
                          setNameInput(e.target.value);
                        }}
                      />
                      <Button
                        variant="outline-success"
                        onClick={() => {
                          dispatch(changeName(nameInput));
                        }}
                      >
                        Search
                      </Button>
                    </Form>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
            <div className="main-content">
              <h1>Emergency Assitance Needed?</h1>
              <h5>Press the button to report an emergency</h5>
              <Button variant="primary">Report</Button>
              <Button variant="primary" onClick={() => setModalShow(true)}>
                show Modal
              </Button>
              <Button variant="primary" onClick={handleShow}>
                Launch bottom OffCanvas
              </Button>
            </div>
            {/* modal to show that you have reported successfully */}
            <MyModal show={modalShow} onHide={() => setModalShow(false)} />

            {/* offcanvas conatianing the form to submit the emergency */}
            <Offcanvas
              show={canvasShow}
              onHide={handleClose}
              placement="bottom"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Send Report</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {/* location search form */}

                <div>
                  <PlacesAutocomplete
                    value={address}
                    onChange={setAddress}
                    onSelect={handleSelect}
                  >
                    {({
                      getInputProps,
                      suggestions,
                      getSuggestionItemProps,
                      loading,
                    }) => (
                      <div>
                        <p>Latitude: {coordinates.lat}</p>
                        <p>Longitude: {coordinates.lng}</p>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            {...getInputProps({ placeholder: "Type address" })}
                          />
                          <Button
                            variant="outline-secondary"
                            id="button-addon2"
                            onClick={findCurrentLocation}
                          >
                            Find me
                          </Button>
                        </InputGroup>

                        <div>
                          {loading ? <div>...loading</div> : null}

                          {suggestions.map((suggestion) => {
                            const style = {
                              backgroundColor: suggestion.active
                                ? "#41b6e6"
                                : "#fff",
                            };

                            return (
                              <div
                                {...getSuggestionItemProps(suggestion, {
                                  style,
                                })}
                              >
                                {suggestion.description}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </PlacesAutocomplete>
                </div>

                {/* images upload form */}
                <Form onSubmit={handleSubmit(testFileOnSubmit)}>
                  <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Multiple files input example</Form.Label>
                    <Form.Control
                      type="file"
                      multiple
                      {...register("files")}
                      onChange={(e) => setFiles(e.target.files)}
                    />
                  </Form.Group>
                  <Button type="submit">Submit form</Button>
                </Form>
              </Offcanvas.Body>
            </Offcanvas>

            {/* bottom navbar */}
            <Navbar bg="light" expand="lg" fixed="bottom">
              {/* <Container id="bottom-nav-container"> */}
              <Nav className="" id="change-flex-to-row">
                <Nav.Item>
                  <LocalFireDepartmentIcon></LocalFireDepartmentIcon>
                </Nav.Item>
                <Nav.Item>
                  <LocalFireDepartmentIcon></LocalFireDepartmentIcon>
                </Nav.Item>
                <Nav.Item>
                  <LocalFireDepartmentIcon></LocalFireDepartmentIcon>
                </Nav.Item>
                <Nav.Item>
                  <LocalFireDepartmentIcon></LocalFireDepartmentIcon>
                </Nav.Item>
                <Nav.Item>
                  <LocalFireDepartmentIcon></LocalFireDepartmentIcon>
                </Nav.Item>
              </Nav>
              {/* </Container> */}
            </Navbar>
          </>
        </>
      ) : (
        <NoPermission></NoPermission>
      )}
    </>
  );
}
