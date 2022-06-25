import React from "react";
import { FormControl, Button } from "react-bootstrap";
import DataGridComponent from "../../Components/DataGridComponent";

export default function AgentList() {
  return (
    <div className="agent__list__container">
      <div className="authority__card card__height">
        <div className="d-flex align-items-center mb-3 justify-content-between">
          <div className="authority__card__title">Agents</div>
          <div className="search__area__container d-flex">
            <FormControl size="sm"></FormControl>
            <Button
              className="table__search__button"
              variant="secondary"
              size="sm"
            >
              Search
            </Button>
          </div>
        </div>
        <DataGridComponent route={"agents"}></DataGridComponent>
      </div>
    </div>
  );
}
