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
      <div className="general__mobile__container">
        <div className="text-center mb-4">
          <h1
            className="general__mobile__title"
            style={{ "font-size": "1.35rem" }}
          >
            Emergency Numbers
          </h1>
        </div>
        <Container className="justify-content-center">
          <Row>
            <Col>
              <Button
                className="d-flex justify-content-center align-items-center py-5"
                style={{
                  backgroundColor: "hsla(210, 100%, 71%, 0.306)",
                  borderColor: "hsla(210, 100%, 71%, 0)",
                }}
                href="tel:155"
                variant="secondary"
              >
                <LocalPoliceIcon
                  style={{ color: "#6bb5ff" }}
                  className="emergency__number__icons"
                ></LocalPoliceIcon>
              </Button>
              <p>Police</p>
            </Col>
            <Col>
              <Button
                className="d-flex justify-content-center align-items-center py-5"
                style={{
                  backgroundColor: "rgba(255, 107, 107, 0.2)",
                  borderColor: "rgba(255, 107, 107, 0.0)",
                }}
                href="tel:199"
                variant="secondary"
              >
                <LocalFireDepartmentIcon
                  style={{ color: "#FF6B6B" }}
                  className="emergency__number__icons"
                ></LocalFireDepartmentIcon>
              </Button>
              <p>Fire</p>
            </Col>
          </Row>
          <Row className="gy-5">
            <Col>
              <Button
                className="d-flex justify-content-center align-items-center py-5"
                style={{
                  backgroundColor: "white",
                  borderColor: "rgb(209 209 209)",
                }}
                href="tel:112"
                variant="secondary"
              >
                <LocalHospitalIcon
                  style={{ color: "#FF6B6B" }}
                  className="emergency__number__icons"
                ></LocalHospitalIcon>
              </Button>
              <p>Ambulance</p>
            </Col>
            <Col>
              <Button
                className="d-flex justify-content-center align-items-center py-5"
                style={{
                  backgroundColor: "rgba(107, 203, 119, 0.2)",
                  borderColor: "transparent",
                }}
                href="tel:177"
                variant="secondary"
              >
                <ForestIcon
                  style={{ color: "#6BCB77" }}
                  className="emergency__number__icons"
                ></ForestIcon>
              </Button>
              <p>Forest Fires</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                className="d-flex justify-content-center align-items-center py-5"
                style={{
                  backgroundColor: "rgba(107, 107, 255, 0.2)",
                  borderColor: "transparent",
                }}
                href="tel:158"
                variant="secondary"
              >
                <SurfingIcon
                  style={{ color: "#6b6bff" }}
                  className="emergency__number__icons"
                ></SurfingIcon>
              </Button>
              <p>Coast Guard</p>
            </Col>
            <Col>
              <Button
                className="d-flex justify-content-center align-items-center py-5"
                href="tel:166"
                style={{
                  backgroundColor: "rgba(56, 56, 56, 0.2)",
                  borderColor: "transparent",
                }}
                variant="secondary"
              >
                <SatelliteAltIcon
                  style={{ color: "#383838" }}
                  className="emergency__number__icons"
                ></SatelliteAltIcon>
              </Button>
              <p>Meteorology</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                className="d-flex justify-content-center align-items-center py-5"
                style={{
                  backgroundColor: "rgba(255, 217, 61, 0.2)",
                  borderColor: "transparent",
                }}
                href="tel:188"
                variant="secondary"
              >
                <BoltIcon
                  style={{ color: "#FFD93D" }}
                  className="emergency__number__icons"
                ></BoltIcon>
              </Button>
              <p>Electrical Faults</p>
            </Col>
            <Col>
              <Button
                className="d-flex justify-content-center align-items-center py-5"
                style={{
                  backgroundColor: "rgba(255, 181, 107, 0.2)",
                  borderColor: "transparent",
                }}
                href="tel:161"
                variant="secondary"
              >
                <PhonelinkEraseIcon
                  style={{ color: "#ffb56b" }}
                  className="emergency__number__icons"
                ></PhonelinkEraseIcon>
              </Button>
              <p>Phone issues</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
