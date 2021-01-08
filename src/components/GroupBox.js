import React from "react";
import GroupPreview from '../components/GroupPreview';


const GroupBox = (props) => {
  const {goal} = props;
  const boxStyle = {
    backgroundColor: "#ffffff",
    height: 400,
    borderRadius: "20px",
    marginBottom: "50px",
    fontSize: 12,
    padding: "20px"
  }
  
  return (
    <div style={boxStyle}>
      <h2>{props.title}</h2>
      <p> {props.usersCompleted} users completed this challenge</p>
      <p>{props.usersWorking} users currently working on this challenge</p>
      <p>{props.description}</p>
      <GroupPreview/>
    </div> 
  );
}

export default GroupBox;