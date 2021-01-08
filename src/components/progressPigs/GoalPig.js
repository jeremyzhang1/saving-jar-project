import React from "react";
import GoalBar from "./GoalBar.js";
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
          <GoalBar 
            bgcolor= {thisUser.bgcolor}
            total = {thisUser.total}
            current = {thisUser.current}
            completed = {thisUser.completed}
          >
            {pigs}
          </GoalBar>
      )
  
  }
  
  export default GoalPig;