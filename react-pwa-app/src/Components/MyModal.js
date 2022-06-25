import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../redux/successInfoSlice";

export default function MyModal() {
  const dispatch = useDispatch();
  const successInfo = useSelector((state) => state.successInfo.value);

  return (
    <Modal
      show={successInfo}
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
        <Button onClick={() => dispatch(toggle())}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
