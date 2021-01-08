//sets up the progress bar to be used on the goal page  
import React from "react";
import pigImage from "../../assets/pig.png";
//copied from https://dev.to/ramonak/react-how-to-create-a-custom-progress-bar-component-in-5-minutes-2lcl TODO: EDIT
const GoalBar = (props) => {
  const {bgcolor, completed} = props;
  const containerStyles = {
    width: '80%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    position: "relative",
    margin: "14em auto 8em auto",
  }
  const fillerStyles = {
    width: `${completed}%`,
    backgroundColor: "#3A693F",
    borderRadius: 'inherit',
    textAlign: 'right'
    
  }
  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }
  const pigImgStyles = {
    width: '100%',
    position: "absolute",
    left: "1em",
    top: "-5.5em",
    zIndex: 9
  }
  const pigStyles = {
    width: '40%',
    marginLeft: "-20%",
    position: 'absolute',
    color: 'white',
    left: `${completed}%`,
    bottom: "-2em",
    textAlign: "center",
  }
  const pigdetails = {
    position: "relative",
    fontSize: "50px",
    zIndex: 10,
  }

  return (
      <div style={containerStyles}>
      <div class="container pig-stats" style={pigStyles}>
              <img src={pigImage} style={pigImgStyles}/>
              <p style={pigdetails} > {props.completed}%</p>
      </div>
      {props.children}
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
  );
};
export default GoalBar;
