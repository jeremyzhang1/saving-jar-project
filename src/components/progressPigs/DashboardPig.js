//import { render } from “@testing-library/react”;
import React from "react";
import ProgressBar from "./ProgressBar.js";
//import pigImage from "../../assets/pig.png";

//const testData = { bgcolor: “#6A1B9A”, completed: 60 };

const DashboardPig = (props) => {
  const { bgcolor, total, current, completed} = props;

  const groupStyle = {
    padding: "10px",
  }

  const titleStyle = {
    textAlign: "left",
    margin: "10px"
  }

  return (
    <div style={groupStyle}>
      <h1 style={titleStyle}> Disneyland </h1>
      <ProgressBar bgcolor={props.bgcolor} completed={props.completed} />
    </div>
  );
}

export default DashboardPig;