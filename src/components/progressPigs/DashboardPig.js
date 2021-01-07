//import { render } from "@testing-library/react";
import React from "react";
import ProgressBar from "./ProgressBar.js";

//const testData = { bgcolor: "#6a1b9a", completed: 60 };

const DashboardPig = (props) => {
  const { bgcolor, total, current, completed} = props;
    return(
        <div>
          <h1> </h1>
          <p> {props.completed}%</p>
          <p> Completed</p>

          <p> ${props.current} saved</p>
          
          <p> ${props.total} to go</p>

        <ProgressBar bgcolor={props.bgcolor} completed={props.completed} />
        </div>
    )

}

export default DashboardPig;