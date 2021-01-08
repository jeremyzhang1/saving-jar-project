import React from "react";
import DashboardPig from "../components/progressPigs/DashboardPig.js";
import {Link} from 'react-router-dom';
import '../components/PageHome.css';
import {Helmet} from 'react-helmet';


const userData = [
  { group: "disney", 
    bgcolor: "#6a1b9a", 
    total: 100, 
    current: 60, 
    completed: 60,
    startdate:'', 
    enddate:'',
  }, 
  { 
    group: "monthly payments",
    bgcolor: "#17641A", 
    total: 200, 
    current: 10, 
    completed: 5,
    startdate:'', 
    enddate:'',
  }
]

const userInfo = {
  id: '',
  groups: userData, 
  totalInAccount: 100, 
  totalSaved: 70,
  totalUncat: 30,
}

const largeButtonStyle = {
  backgroundColor: "#3A693F",
  color: "#ffffff",
  fontSize: 16,
  height: 45,
  width: 300,
  borderRadius: "20px",
  marginBottom: "10px"
}

const smallButtonStyle = {
  backgroundColor: "#3A693F",
  color: "#ffffff",
  fontSize: 14,
  height: 35,
  width: 150,
  borderRadius: "10px",
  margin: "5px"
}

const whiteBack = {
  backgroundColor: "white",
  maxWidth: "1200px",
  justifyContent:"center",
  alignItems: "center",
}

const heading = {
  fontSize: 80,
  

}

// data to include: total amount, percentage, 

function PageHome() {
  return (
    <div className = "pageHome">
      <Helmet>
          <style>{'body { background-color:  #CBE2C5; }'}</style>
      </Helmet>

      <h1 style = {heading}>My Dashboard</h1>
      <div class = "rectangle" style = {whiteBack}> 
      <div style = {{margin: "50px"}}>
        <h2>Overview</h2>
          <p> Total Savings: ${userInfo.totalSaved}</p> 
          <p> uncategoried money: ${userInfo.totalUncat}</p>
          <button style = {smallButtonStyle} class ="green"> Move Money to Goal</button>
          <button style = {smallButtonStyle} class ="green"> Upload Money</button>
        </div>
        
      </div>
      
      <div>
        <h1> My Goals</h1>
        <Link to="/groups">
          <button type="button">
              Join a Goal
          </button>
        </Link>
        {userData.map((item, index) => (
          <DashboardPig key ={index}  
          bgcolor = {item.bgcolor} 
          current = {item.current}
          total = {item.total} 
          completed = {item.completed}>
          </DashboardPig>        
        ))}
      </div>
        
         
    </div>

    
  );
}

export default PageHome;