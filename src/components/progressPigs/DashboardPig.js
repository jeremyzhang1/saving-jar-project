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
  
  const manageStyle = {
    backgroundColor: "#3A693F",
    color: "#FFFFFF",
    fontSize: "25px",
    height: "55px",
    width: "100%",
    borderRadius: "50px",
    borderWidth: "0px",
    marginRight: "40px",
    boxShadow: "0px 4px 40px rgba(51, 66, 53, 0.40)"
  }

  return (
    <div style={groupStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}> Disneyland </h1>
        <div class="dropdown">
          <button class="dropbtn">Dropdown</button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
      <ProgressBar bgcolor={props.bgcolor} completed={props.completed} />
      <hr style={lineStyle}></hr>
    </div>
  );
}

export default DashboardPig;