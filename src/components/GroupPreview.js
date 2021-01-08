import React, { Component } from 'react';
import {
  PopupboxManager,
  PopupboxContainer
} from 'react-popupbox';
import {Link} from 'react-router-dom';
import "react-popupbox/dist/react-popupbox.css"

class GroupPreview extends Component {
  openPopupbox() {
    const buttonStyle = {
      backgroundColor: "#0e71a9",
      color: "#ffffff",
      fontSize: 16,
      height: 30,
      width: 160,
      borderRadius: "20px"
    }
    const content = (
      <div>
        <p>Created by: Username</p>
        <p>This is a description of the group. We all want to go to disneyland! Therefore, we should all really try really hard to save for disneyland. And like, we should also really encourage each other to save to go to disneyland. yeah. and im going to keep going on about diensy land. Go disney!</p>
        <Link to="/goal">
          <button style={buttonStyle}>Join This Goal!</button>
        </Link> 
        <p>100 users completed this challenge</p>
        <p>30 users currently working on this challenge</p>
      </div>
    )
    PopupboxManager.open({ content })
  }

  render() {
    const popupboxConfig = {
      titleBar: {
        enable: true,
        text: 'Goal Name'
      },
      fadeIn: true,
      fadeInSpeed: 500
    }
    const buttonStyle = {
      backgroundColor: "#0e71a9",
      color: "#ffffff",
      fontSize: 16,
      height: 30,
      width: 120,
      marginBottom: "10px",
      borderRadius: "20px"
    }

    return (
      <div>
        <button onClick={this.openPopupbox} style={buttonStyle}>Details</button>
        <PopupboxContainer { ...popupboxConfig } />
      </div>
    )
  }
}

export default GroupPreview;