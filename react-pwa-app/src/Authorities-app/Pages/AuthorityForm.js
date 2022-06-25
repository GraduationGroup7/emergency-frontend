import React, { useEffect, useState } from "react";
import UpdateView from "../../Components/UpdateView";
import { useParams } from "react-router-dom";
import { get_emergency_details, get_available_agents } from "../../API/API";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  FormSelect,
  Modal,
  FormCheck,
} from "react-bootstrap";

export default function AuthorityForm() {
  let { formType, id } = useParams();
  const [emergencyDetails, changeEmergencyDetails] = useState();
  const [availableAgents, setAvailableAgents] = useState();
  useEffect(() => {
    if (formType === "emergencies" && id) {
      get_emergency_details(id).then((res) => {
        console.log(res.data);
        changeEmergencyDetails(res.data.data);
      });
    }
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    get_available_agents().then((res) => {
      console.log(res.data.data.data);
      setAvailableAgents(res.data.data.data);
    });
    setShow(true);
  };

  const [showEvidence, setShowEvidence] = useState(false);

  const handleCloseEvidence = () => setShowEvidence(false);

  const handleShowEvidence = () => setShowEvidence(true);

  return (
    <div className="authority__form__container">
      {emergencyDetails ? (
        <>
          <Modal size="lg" centered show={show} onHide={handleClose}>
            <Modal.Header className="modal__header__class" closeButton>
              <Modal.Title className="modal__title__class">
                Assign Agents
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <table
                style={{ border: "1px solid #ebe9f1" }}
                className="assigned__agents__table"
              >
                <tr>
                  <th>Name</th>
                  <th>Occupation</th>
                  <th>Phone</th>
                  <th>Assigned</th>
                </tr>
                {availableAgents && availableAgents.length > 0
                  ? availableAgents.map((agent, index) => (
                      <tr key={index}>
                        <td>{agent.first_name + " " + agent.last_name}</td>
                        <td>{agent.agent_type_name}</td>
                        <td>{agent.phone}</td>
                        <td>
                          <FormCheck></FormCheck>
                        </td>
                      </tr>
                    ))
                  : null}
              </table>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal
            size="lg"
            centered
            show={showEvidence}
            onHide={handleCloseEvidence}
          >
            <Modal.Header className="modal__header__class" closeButton>
              <Modal.Title className="modal__title__class">
                Add Evidence
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md={8}>
                  <div className="upload__evidence__body">
                    <i className="bi bi-cloud-upload-fill fa-lg"></i>
                    <div className="mb-3">Drop Files Here or</div>
                    <Button>Click Here</Button>
                  </div>
                </Col>
                <Col md={4}>
                  <div>Uploaded Files</div>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleCloseEvidence}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <Row className="mb-3">
            <Col md={12}>
              <div className="authority__card mb-3">
                <div className="mb-3 d-flex justify-content-between align-items-center">
                  <div className="authority__card__title">
                    Emergency Details
                  </div>
                  <Button variant="primary">Merge Events</Button>
                </div>
                <div className="">
                  <Row>
                    <Col md={12}>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <div className="emergency__detail__label">
                            Reported Event ID
                          </div>
                          <div className="emergency__detail__label">
                            Event Description
                          </div>
                          <div className="emergency__detail__label">
                            Emergency Type
                          </div>
                          <div className="emergency__detail__label">
                            Reported By
                          </div>
                          <div className="emergency__detail__label">
                            Reported At
                          </div>
                          <div className="emergency__detail__label">
                            Latitude
                          </div>
                          <div className="emergency__detail__label">
                            Longitude
                          </div>
                          <div className="emergency__detail__label">Status</div>
                          <div className="emergency__detail__label">
                            Is Active
                          </div>
                          <div className="emergency__detail__label">
                            Completed
                          </div>
                        </div>
                        <div>
                          <div className="emergency__detail__info">
                            {
                              emergencyDetails.emergency_types.find(
                                (emergency) =>
                                  emergency.id ===
                                  emergencyDetails.emergency.emergency_type_id
                              ).name
                            }
                          </div>
                          <div className="emergency__detail__info">{id}</div>
                          <div className="emergency__detail__info">
                            {emergencyDetails.emergency.description}
                          </div>
                          <div className="emergency__detail__info">
                            {emergencyDetails.reporting_customer.first_name}{" "}
                            {emergencyDetails.reporting_customer.last_name}
                          </div>
                          <div className="emergency__detail__info">
                            {emergencyDetails.reporting_customer.created_at}
                          </div>
                          <div className="emergency__detail__info">
                            {emergencyDetails.emergency.latitude}
                          </div>
                          <div className="emergency__detail__info">
                            {emergencyDetails.emergency.longitude}
                          </div>
                          <Form.Select className="emergency__detail__select">
                            <option>Disabled select</option>
                          </Form.Select>
                          <Form.Select className="emergency__detail__select">
                            <option>Disabled select</option>
                          </Form.Select>
                          <Form.Select className="emergency__detail__select">
                            <option>Disabled select</option>
                          </Form.Select>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={7}>
              <div className="authority__card p-0">
                <div className="mb-3 p-3 d-flex justify-content-between">
                  <div className="authority__card__title">Assigned Agents</div>
                  <Button onClick={handleShow} variant="primary">
                    Add Agents
                  </Button>
                </div>

                <table className="assigned__agents__table">
                  <tr>
                    <th>Name</th>
                    <th>Occupation</th>
                    <th>Phone</th>
                  </tr>
                  <tr>
                    <td>Alex Rubson</td>
                    <td>Police Department</td>
                    <td>+905334567890</td>
                  </tr>
                  <tr>
                    <td>Alex Rubson</td>
                    <td>Fire Department</td>
                    <td>+905334567890</td>
                  </tr>
                  <tr>
                    <td>Alex Rubson</td>
                    <td>Natural Disastor Division</td>
                    <td>+905334567890</td>
                  </tr>
                </table>
              </div>
            </Col>
            <Col md={5}>
              <div className="authority__card p-0">
                <div className="d-flex justify-content-between p-3 mb-3">
                  <div className="authority__card__title">Evidence Files</div>
                  <Button onClick={handleShowEvidence} variant="primary">
                    Add Evidence
                  </Button>
                </div>

                <table className="assigned__agents__table">
                  <tr>
                    <th>#</th>
                    <th>Type</th>
                    <th>Uploaded At</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Photo</td>
                    <td>09-06-2022 19:58:05</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Photo</td>
                    <td>09-06-2022 19:58:05</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Photo</td>
                    <td>09-06-2022 19:58:05</td>
                  </tr>
                </table>
              </div>
            </Col>
          </Row>
        </>
      ) : null}
    </div>
  );
}
