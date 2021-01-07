import React from "react";
import GroupPreview from '../components/GroupPreview';

function GroupBox() {
  const buttonStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "20px"
  }

  return (
    <div style={buttonStyle}>
      <h2>Group Title</h2>
      <GroupPreview/>
    </div> 
  );
}

export default GroupBox;