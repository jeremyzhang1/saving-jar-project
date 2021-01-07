import React from "react";
import GroupPreview from '../components/GroupPreview';

function GroupBox() {
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
      <h2>Group Title</h2>
      <p>100 users completed this challenge</p>
      <p>30 users currently working on this challenge</p>

      <p>This is a description of the group. We all want to go to disneyland! Therefore, we should all really try really hard to save for disneyland. And like, we should also really encourage each other to save to go to disneyland. yeah. and im going to keep going on about diensy land. Go disney!</p>
      <GroupPreview/>
    </div> 
  );
}

export default GroupBox;