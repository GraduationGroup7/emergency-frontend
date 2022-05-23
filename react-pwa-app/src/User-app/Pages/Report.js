import React, { useState } from "react";
import MyButton from "../../Components/MyButton";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../../redux/userSlice";
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
  const dispatch = useDispatch();
  const [nameInput, setNameInput] = useState("");
  return (
    <>
      <>
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
      </>
    </>
  );
}
