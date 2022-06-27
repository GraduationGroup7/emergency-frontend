import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import {
  bulk_delete,
  create_backup,
  get_backup_file,
  get_table_list,
} from "../../API/API";
import DataGridComponent from "../../Components/DataGridComponent";
import { toggle } from "../../redux/successInfoSlice";

export default function AdminDashboard() {
  const [tableList, setTableList] = useState([]);
  const navigate = useNavigate();
  const [tableName, setTableName] = useOutletContext();
  const [selectedRows, setSelectedRows] = useState([]);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    (async () => {
      let res = await get_table_list();
      setTableList(
        res.data.data.map((table, index) => {
          console.log(table);
          return (
            <Nav.Link
              key={index}
              onClick={() => {
                setTableName(table.name);
              }}
            >
              {`${table.name}`}
            </Nav.Link>
          );
        })
      );
    })();
  }, []);

  async function backup() {
    try {
      let res = await create_backup();
      await get_backup_file(res.data.data.fileName);
    } catch (error) {}
  }
  return (
    <div className="dashboard__container">
      <div className="authority__card card__height">
        <div className="d-flex align-items-center mb-3 justify-content-between">
          <div className="authority__card__title">
            {tableName ? tableName.toUpperCase() : null}
          </div>
          <div>
            <Button onClick={backup}>Backup DB</Button>

            {/* dont show the create-delete buttons bcz available agents is not a real table. it is a filtered one */}
            {tableName === "available-agents" ? (
              <></>
            ) : (
              <>
                <Button
                  style={{ marginLeft: "8px", marginRight: "8px" }}
                  onClick={(e) => {
                    navigate(`form/${tableName}/create_form`);
                  }}
                >
                  Create
                </Button>
                <Button
                  onClick={async (e) => {
                    try {
                      let res = await bulk_delete(tableName, selectedRows);
                      dispatch(toggle());
                    } catch (error) {
                      console.log("delete operation failed", error);
                    }
                  }}
                >
                  Delete
                </Button>{" "}
              </>
            )}
          </div>
        </div>

        {tableName && (
          <DataGridComponent
            table_name={tableName}
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
          ></DataGridComponent>
        )}
      </div>

      <Modal
        show={showModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Backup Status
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
