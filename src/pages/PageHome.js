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
  textAlign: "center",
  width: "70%",
  margin: "auto",
  marginTop: "50px",
  padding: "30px",
  borderRadius: "50px"
}

const heading = {
  fontSize: 70,
  marginTop: 70
}

const goalTitle = {
  display: "inline",
  textAlign: "left",
  margin: "3%",
  
}

const goalHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "2%",
}

const goalBtnStyle = {
  backgroundColor: "#3A693F",
  color: "#FFFFFF",
  fontSize: "25px",
  height: "55px",
  width: "100%",
  borderRadius: "50px",
  borderWidth: "0px",
  marginRight: "40px",
  boxShadow: "0px 4px 40px rgba(51, 66, 53, 0.40)"
}

const lineStyle = {
  borderWidth: "2px",
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
      
      <div class="goals" style={whiteBack}>
        <div style={goalHeader}>
          <h1 style={goalTitle}> My Goals</h1>
          <Link to="/groups">
            <button type="button" style={goalBtnStyle}>
                Join a Goal
            </button>
          </Link>
          
        </div>
        <hr style={lineStyle}></hr>
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