import React from "react";
import GroupPreview from '../components/GroupPreview';

function GroupBox() {
  const boxStyle = {
    backgroundColor: "#ffffff",
    height: 400,
    borderRadius: "20px",
    marginBottom: "100px"
  }

  return (
    <div style={boxStyle}>
      <h2>Group Title</h2>
      <GroupPreview/>
    </div> 
  );
}

export default GroupBox;