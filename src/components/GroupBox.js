import React from "react";
import GroupPreview from '../components/GroupPreview';


const GroupBox = (props) => {
  const {title, usersCompleted, usersWorking, description, imgsrc} = props;
  const boxStyle = {
    backgroundColor: "#ffffff",
    height: 400,
    borderRadius: "20px",
    marginBottom: "50px",
    fontSize: 12,
    //padding: "20px"
  }

const paddingStyle = {
  paddingTop: "10px",
  paddingLeft: "20px",
  paddingRight: "20px"
}
  const imgStyle = {
    width: "100%", 
    maxHeight: 100,
    overFlow: "hidden",
    objectFit: "cover",

  }
  
  return (
    <div style={boxStyle}>
      <h2 style = {paddingStyle}>{title}</h2>
      <img style = {imgStyle} src = {imgsrc}></img>
      <div style = {paddingStyle}>
      <p> {usersCompleted} users completed this challenge</p>
      <p>{usersWorking} users currently working on this challenge</p>
      <p>{description}</p>

      </div>
      <GroupPreview/>
    </div> 
  );
}

export default GroupBox;