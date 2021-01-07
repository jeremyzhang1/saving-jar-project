import React from "react";
import DashboardPig from "./DashboardPig.js";


const GoalPig = (props) => {
    const { others, thisUser} = props;
      return(
          <DashboardPig 
            bgcolor= {thisUser.bgcolor}
            total = {thisUser.total}
            current = {thisUser.current}
            completed = {thisUser.completed}
          ></DashboardPig>
      )
  
  }
  
  export default GoalPig;