import React from "react";
import ProgressBar from "./ProgressBar.js";
import MiniPig from "./MiniPig.js";

const GoalPig = (props) => {
    const { others, thisUser} = props;
      let percentage = 0;
      let pigs = [];
      for (let user of others) {
        percentage += user.percentage;
        pigs.push(<MiniPig percentage={percentage} ></MiniPig>);
      }
      return(
          <ProgressBar 
            bgcolor= {thisUser.bgcolor}
            total = {thisUser.total}
            current = {thisUser.current}
            completed = {thisUser.completed}
          >
            {pigs}
          </ProgressBar>
      )
  
  }
  
  export default GoalPig;