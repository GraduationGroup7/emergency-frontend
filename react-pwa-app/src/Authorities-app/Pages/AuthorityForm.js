import React, { useEffect, useState } from "react";
import UpdateView from "../../Components/UpdateView";
import { useParams } from "react-router-dom";
import {
  get_emergency_details,
  get_available_agents,
  assign_agents,
  update_emergency_form,
  merge_emergencies,
  set_emergency_note,
  get_emergency_note,
} from "../../API/API";
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
  Spinner,
} from "react-bootstrap";
import DataGridComponent from "../../Components/DataGridComponent";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { updateError } from "../../redux/errorInfoSlice";
import { toggle } from "../../redux/successInfoSlice";

export default function AuthorityForm() {
  const dispatch = useDispatch();
  let { formType, id } = useParams();
  const [emergencyDetails, changeEmergencyDetails] = useState();
  const [availableAgents, setAvailableAgents] = useState();
  const [selectedRows, setSelectedRows] = useState([]);
  const [assignedAgents, setAssignedAgents] = useState([]);
  const [evidenceFiles, setEvidenceFiles] = useState([]);
  const [emergencyFormDetails, changeEmergencyFormDetails] = useState();
  const [view, setView] = useState(false);
  const [note, setNote] = useState();
  const [notes, setNotes] = useState();

  useEffect(() => {
    console.log("formType", formType);
    if (formType === "emergencies" && id) {
      get_emergency_details(id).then((res) => {
        console.log(res.data);
        changeEmergencyDetails(res.data.data);
        changeEmergencyFormDetails(res.data.data.emergency);
        setAssignedAgents(res.data.data.assigned_agents);
        setEvidenceFiles(res.data.data.emergency_files);
      });
      get_emergency_note(id).then((res) => {
        setNotes(res.data.data);
      });
    } else if (formType === "agents" && id) {
      setView(true);
    }
  }, []);

  const [show, setShow] = useState(false);
  const [showMerging, setShowMerging] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
  };

  const saveNote = async () => {
    try {
      await set_emergency_note(id, note);
      setNotes((prevValue) => {
        return [...prevValue, { note }];
      });
      setNote("");
      dispatch(toggle());
    } catch (error) {
      console.log(error);
      dispatch(updateError(error.message));
    }
  };

  const reverseBooleanField = (field, value) => {
    let newVal = { ...emergencyFormDetails };
    newVal[field] = !newVal[field];
    console.log("new Val", newVal);
    changeEmergencyFormDetails(newVal);
  };

  const updateField = (field, value) => {
    console.log("changing this ", field, value);
    let newVal = { ...emergencyFormDetails };
    newVal[field] = value;
    console.log("new Val", newVal);
    changeEmergencyFormDetails(newVal);
  };

  const sendUpdateRequest = async () => {
    try {
      const res = await update_emergency_form(
        emergencyFormDetails.id,
        emergencyFormDetails
      );
      console.log(res);
      dispatch(toggle());
    } catch (e) {
      console.log(e);
      dispatch(updateError(error.message));
    }
  };

  const [showEvidence, setShowEvidence] = useState(false);

  const handleCloseEvidence = () => setShowEvidence(false);
  const handleShowEvidence = () => setShowEvidence(true);
  const handleCloseMerging = () => setShowMerging(false);
  const handleShowMerging = () => setShowMerging(true);

  const assignAgents = async () => {
    try {
      let res = await assign_agents(id, selectedRows);
      setAssignedAgents(res.data.data);
      handleClose();
      dispatch(toggle());
    } catch (error) {
      console.log(error);
      dispatch(updateError(error.message));
    }
  };
  return (
    <div className="authority__form__container">
      {/* #TODO: psudo routing here, so refactor this */}
      {emergencyDetails ? (
        <>
          {/* assiging agents */}
          <Modal
            size="lg"
            dialogClassName="ultra__wide__modal"
            centered
            show={show}
            onHide={handleClose}
          >
            <Modal.Header className="modal__header__class" closeButton>
              <Modal.Title className="modal__title__class">
                Assign Agents
              </Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{
                height: "70vh",
                overflowY: "scroll",
              }}
            >
              <div>
                {/* alan's implementation of available agents */}
                {/* <table
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
                </table> */}
              </div>
              <DataGridComponent
                table_name={"available-agents"}
                selectedRows={selectedRows}
                setSelectedRows={setSelectedRows}
              ></DataGridComponent>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={assignAgents}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Merging Emergencies */}
          <Modal
            size="lg"
            dialogClassName="ultra__wide__modal"
            centered
            show={showMerging}
            onHide={handleCloseMerging}
          >
            <Modal.Header className="modal__header__class" closeButton>
              <Modal.Title className="modal__title__class">
                Merge Emergencies, choose emergencies to combine
              </Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{
                height: "70vh",
                overflowY: "scroll",
              }}
            >
              <div>
                {/* alan's implementation of available agents */}
                {/* <table
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
                </table> */}
              </div>
              <DataGridComponent
                table_name={"mergable-emergencies"}
                selectedRows={selectedRows}
                setSelectedRows={setSelectedRows}
                emergencyId={id}
              ></DataGridComponent>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                onClick={() => {
                  try {
                    // console.log("slice res", selectedRows.slice(1));
                    merge_emergencies(id, selectedRows);
                    handleCloseMerging();
                    dispatch(toggle());
                  } catch (error) {
                    console.log(error);
                    dispatch(updateError(error.message));
                  }
                }}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Adding Evidences */}
          <Modal
            size="lg"
            centered
            dialogClassName="ultra__wide__modal"
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
            <Col lg={9}>
              <div className="authority__card mb-3">
                <div className="mb-3 d-flex justify-content-between align-items-center">
                  <div className="authority__card__title">
                    Emergency Details
                  </div>
                  <div className="d-flex justify-content-end">
                    <Button
                      style={{ marginRight: "8px" }}
                      onClick={sendUpdateRequest}
                    >
                      Update Emergency
                    </Button>
                    <Button
                      onClick={() => {
                        handleShowMerging();
                      }}
                      variant="primary"
                    >
                      Merge Events
                    </Button>
                  </div>
                </div>
                <div>
                  <div className="emergency__detail__info">
                    {emergencyDetails.emergency.description}
                  </div>
                </div>
                <div className="">
                  <Row>
                    <Col lg={12}>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <div className="emergency__detail__label">
                            Reported Event
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
                            {emergencyDetails.reporting_user.name}
                          </div>
                          <div className="emergency__detail__info">
                            {emergencyDetails.reporting_user.created_at}
                          </div>
                          <div className="emergency__detail__info">
                            {emergencyDetails.emergency.latitude}
                          </div>
                          <div className="emergency__detail__info">
                            {emergencyDetails.emergency.longitude}
                          </div>
                          <Form.Select
                            className="emergency__detail__select"
                            onChange={(e) => {
                              updateField("status", e.target.value);
                            }}
                            value={
                              emergencyFormDetails
                                ? emergencyFormDetails.status
                                : undefined
                            }
                          >
                            {emergencyDetails.available_statuses.map(
                              (elem, index) => {
                                return (
                                  <option key={nanoid()} value={elem}>
                                    {elem}
                                  </option>
                                );
                              }
                            )}
                          </Form.Select>
                          <Form.Check
                            checked={
                              emergencyFormDetails &&
                              emergencyFormDetails.is_active
                                ? true
                                : undefined
                            }
                            className="emergency__detail__select"
                            onChange={(e) => {
                              reverseBooleanField("is_active", e.target.value);
                            }}
                          ></Form.Check>
                          <Form.Check
                            checked={
                              emergencyFormDetails &&
                              emergencyFormDetails.completed
                                ? true
                                : undefined
                            }
                            className="emergency__detail__select"
                            onChange={(e) => {
                              reverseBooleanField("completed", e.target.value);
                            }}
                          ></Form.Check>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="authority__card">
                <div className="authority__card__title mb-2">Notes</div>
                <div className="mb-2">
                  {notes
                    ? notes.map((note, index) => <div>{note.note}</div>)
                    : null}
                </div>
                <textarea
                  onChange={(e) => {
                    setNote(e.target.value);
                  }}
                  value={note}
                  className="w-100 general__mobile__input mb-2"
                  style={{ minHeight: "140px" }}
                />
                <Button onClick={() => saveNote()} className="w-100">
                  Save
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={7}>
              <div className="authority__card mb-3 p-0">
                <div className="mb-3 p-3 d-flex justify-content-between">
                  <div className="authority__card__title">Assigned Agents</div>
                  <Button onClick={handleShow} variant="primary">
                    Add Agents
                  </Button>
                </div>

                <table className="assigned__agents__table">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Type</th>
                  </tr>
                  <tbody>
                    {assignedAgents.map((a) => {
                      return (
                        <tr key={a.id}>
                          <td>{a.id}</td>
                          <td>
                            {a.first_name} {a.last_name}
                          </td>
                          <td>{a.type}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Col>
            <Col lg={5}>
              <div className="authority__card mb-3 p-0">
                <div className="d-flex justify-content-between p-3 mb-3">
                  <div className="authority__card__title">Evidence Files</div>
                </div>

                <table className="assigned__agents__table">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Extension</th>
                  </tr>
                  <tbody>
                    {evidenceFiles.map((e) => (
                      <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </>
      ) : view ? (
        <div className="authority__card">
          <UpdateView formType={formType} id={id}></UpdateView>
        </div>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
}
