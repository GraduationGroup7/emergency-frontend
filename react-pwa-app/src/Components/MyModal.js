import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Operation Success!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Your operation was performed successfully. You can now close this
          prompt!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
