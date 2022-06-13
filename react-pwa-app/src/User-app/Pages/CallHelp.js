import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ForestIcon from "@mui/icons-material/Forest";
import SurfingIcon from "@mui/icons-material/Surfing";
import BoltIcon from "@mui/icons-material/Bolt";
import PhonelinkEraseIcon from "@mui/icons-material/PhonelinkErase";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";

export default function CallHelp() {
  return (
    <>
      <div className="m-auto">
        <h1 className="text-center mb-5">Emergency Numbers</h1>
        <Container className="d-grid justify-content-center">
          <Row>
            <Col>
              <Button
                className="d-flex justify-content-center align-items-center"
                href="tel:155"
                variant="secondary"
              >
                <LocalPoliceIcon className="emergency-number-icons"></LocalPoliceIcon>
              </Button>
              <p>Police</p>
            </Col>
            <Col>
              <Button
                className="d-flex justify-content-center align-items-center"
                href="tel:199"
                variant="secondary"
              >
                <LocalFireDepartmentIcon className="emergency-number-icons"></LocalFireDepartmentIcon>
              </Button>
              <p>Fire</p>
            </Col>
          </Row>
          <Row className="gy-5">
            <Col>
              <Button
                className="d-flex justify-content-center align-items-center"
                href="tel:112"
                variant="secondary"
              >
                <LocalHospitalIcon className="emergency-number-icons"></LocalHospitalIcon>
              </Button>
              <p>Ambulance</p>
            </Col>
            <Col>
              <Button
                className="d-flex justify-content-center align-items-center"
                href="tel:177"
                variant="secondary"
              >
                <ForestIcon className="emergency-number-icons"></ForestIcon>
              </Button>
              <p>Forest Fires</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                className="d-flex justify-content-center align-items-center"
                href="tel:158"
                variant="secondary"
              >
                <SurfingIcon className="emergency-number-icons"></SurfingIcon>
              </Button>
              <p>Coast Guard</p>
            </Col>
            <Col>
              <Button
                className="d-flex justify-content-center align-items-center"
                href="tel:166"
                variant="secondary"
              >
                <SatelliteAltIcon className="emergency-number-icons"></SatelliteAltIcon>
              </Button>
              <p>Meteorology</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                className="d-flex justify-content-center align-items-center"
                href="tel:188"
                variant="secondary"
              >
                <BoltIcon className="emergency-number-icons"></BoltIcon>
              </Button>
              <p>Electrical Faults</p>
            </Col>
            <Col>
              <Button
                className="d-flex justify-content-center align-items-center"
                href="tel:161"
                variant="secondary"
              >
                <PhonelinkEraseIcon className="emergency-number-icons"></PhonelinkEraseIcon>
              </Button>
              <p>Phone issues</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
