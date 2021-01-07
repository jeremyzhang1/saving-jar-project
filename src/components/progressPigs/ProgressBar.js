//sets up the progress bar to be used oh the dashboard and the groups page  
import React from "react";
import pigImage from "../../assets/pig.png";

//copied from https://dev.to/ramonak/react-how-to-create-a-custom-progress-bar-component-in-5-minutes-2lcl TODO: EDIT
const ProgressBar = (props) => {
  const {bgcolor, completed} = props;

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginLeft: 50,
    marginRight: 50,
    marginTop: '-10%',
    marginBottom: '10%'
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
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
    width: '30%',
    position: 'relative',
    textAlign: 'center',
    color: 'white',
    left: `${completed-10}%`
  }

  const compStyles = {
    position: 'absolute',
    textAlign: 'center',
    top: '37%',
    left: '33%'
    
  }

  const savedStyles = {
    position: 'absolute',
    textAlign: 'center',
    top: '47%',
    left: '33%'
  }

  const totalStyles = {
    position: 'absolute',
    textAlign: 'center',
    top: '57%',
    left: '33%'
  }

  return (
    <div>
      <div class="container pig-stats" style={pigStyles}>
              <img src={pigImage} style={pigImgStyles}/>
              <p class="centered" style={compStyles}> {props.completed}% complete </p>
              <p class="centered" style={savedStyles}> ${props.current} saved </p>
              <p class="centered" style={totalStyles}> ${props.total} to go </p>
      </div>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;