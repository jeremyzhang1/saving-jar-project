//import { render } from “@testing-library/react”;
import React from "react";
import ProgressBar from "./ProgressBar.js";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import "./DashboardPig.css"
//import pigImage from "../../assets/pig.png";

//const testData = { bgcolor: “#6A1B9A”, completed: 60 };

const DashboardPig = (props) => {
  const { bgcolor, total, current, completed} = props;

  const groupStyle = {
    padding: "10px",
  }

  const titleStyle = {
    textAlign: "left",
    marginTop: "20px",
    marginBottom: "0px"
  }

  const lineStyle = {
    borderWidth: "2px"
  }

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "2%",
  }
  
  return (
    <div style={groupStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}> Disneyland </h1>
        <div class="dropdown">
          <button class="dropbtn">Manage</button>
          <div class="dropdown-content">
            <a href="#">Add Money</a>
            <a href="#">Edit Goal</a>
            <a href="#">See Group</a>
          </div>
        </div>
      </div>
      <ProgressBar bgcolor={props.bgcolor} completed={props.completed} />
      <hr style={lineStyle}></hr>
    </div>
  );
}

export default DashboardPig;