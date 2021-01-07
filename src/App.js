import React from 'react'
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import PageLogin from './pages/PageLogin';
import PageHome from './pages/PageHome';
import PageGroups from './pages/PageGroups';
import PageGoal from './pages/PageGoal';
import BootstrapNavbar from './components/NavBar.js';


//import Navbar from 'react-bootstrap/Navbar';
var Bootstrap = require('react-bootstrap')

/*const navbar = {
  backgroundColor: black,
  -webkit-box-shadow: 0px 0px 29px 5px rgba(0,0,0,0.75),
  -moz-box-shadow: 0px 0px 29px 5px rgba(0,0,0,0.75),
  box-shadow: 0px 0px 29px 5px rgba(0,0,0,0.75),
  
  font-size: 1.2em,
}*/
function App() {

  
  return (
    <div className="App">
      <BootstrapNavbar/>
    </div>
  );
}

export default App;