import React, { useEffect, useState } from "react";
import MyButton from "../../Components/MyButton";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../../redux/userSlice";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MyModal from "../../Components/MyModal";
import BottomOffCanvas from "../../Components/BottomOffCanvas";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  Form,
  NavDropdown,
  FormControl,
  Button,
} from "react-bootstrap";

export default function Report() {
  const user = useSelector((state) => state.user);
  const [canvasShow, setCanvasShow] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [files, setFiles] = useState("");

  const dispatch = useDispatch();

  const handleClose = () => setCanvasShow(false);
  const handleShow = () => setCanvasShow(true);

  useEffect(() => {
    console.log(files);
  }, [files]);

  return (
    <>
      <>
        {/* top navbar */}
        <Navbar key={false} bg="light" expand={false} className="mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
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
        <Offcanvas show={canvasShow} onHide={handleClose} placement="bottom">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Send Report</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form.Group
              controlId="formFileMultiple"
              className="mb-3"
              value={files}
              onChange={(e) => setFiles(e.target.value)}
            >
              <Form.Label>Multiple files input example</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>
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
  );
}
