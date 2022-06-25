import React from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Row,
  Col,
  FormSelect,
  Button,
} from "react-bootstrap";

export default function CreateAgent() {
  return (
    <div className="create__agent__container">
      <div className="authority__card">
        <div className="d-flex align-items-center mb-3">
          <div className="authority__card__title">Create Agent</div>
        </div>
        <Form className="mb-3">
          <Row>
            <Form.Group
              as={Col}
              md={6}
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>First Name</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group
              as={Col}
              md={6}
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Last Name</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group
              as={Col}
              md={6}
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              as={Col}
              md={6}
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>ID Number</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group
              as={Col}
              md={6}
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group
              as={Col}
              md={6}
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group
              as={Col}
              md={6}
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="phone" />
            </Form.Group>
            <Form.Group
              as={Col}
              md={6}
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Department </Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Row>
        </Form>
        <div className="d-flex justify-content-end">
          <Button variant="success">Create Agent</Button>
        </div>
      </div>
    </div>
  );
}
