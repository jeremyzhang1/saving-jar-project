import React from "react";
import ProgressBar from "./ProgressBar.js";


const GoalPig = (props) => {
    const { others, thisUser} = props;
      return(
          <ProgressBar 
            bgcolor= {thisUser.bgcolor}
            total = {thisUser.total}
            current = {thisUser.current}
            completed = {thisUser.completed}
          ></ProgressBar>
      )
  
  }
  
  export default GoalPig;