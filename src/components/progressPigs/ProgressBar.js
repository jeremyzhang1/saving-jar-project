//sets up the progress bar to be used oh the dashboard page  
import React from "react";
import pigImage from "../../assets/pig.png";
//copied from https://dev.to/ramonak/react-how-to-create-a-custom-progress-bar-component-in-5-minutes-2lcl TODO: EDIT
const ProgressBar = (props) => {
  const {bgcolor, completed} = props;
  const containerStyles = {
    height: 20,
    width: '90%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginLeft: 50,
    marginRight: 50,
    marginTop: '-10%',
    marginBottom: '10px',
  }
  const fillerStyles = {
    height: '100%',
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
    width: '100%'
  }
  const pigStyles = {
    width: '40%',
    position: 'relative',
    textAlign: 'center',
    left: `${completed-20}%`,
    marginTop: "-7%"
  }
  const compStyles = {
    position: 'absolute',
    textAlign: 'center',
    marginLeft: 50,
    marginBottom: 20,
    top: '45%',
    left: '35%',
    color: "white",
    fontSize: "40px"
    
  }
  const statStyles = {
    // position: 'absolute',
    textAlign: 'left',
    color: "#3A693F",
    marginLeft: 50,
    marginTop: 10,
  }

  const statGroup = {
    // position: 'absolute',
    margin: 20
  }

  return (
    <div>
      <div class="container pig-stats" style={pigStyles}>
          <img src={pigImage} style={pigImgStyles}/>
          <p class="centered" style={compStyles}> {props.completed}% </p>
      </div>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
      <div style={statGroup}>
        <p class="" style={statStyles}> ${props.current} saved </p>
        <p class="" style={statStyles}> ${props.total} to go </p>
      </div>
      
    </div>
  );
};
export default ProgressBar;