import React from "react";
import DashboardPig from "../components/progressPigs/DashboardPig.js";

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

const testData =
  { bgcolor: "#6a1b9a", 
  total: 100, 
  current: 60, 
  completed: 60,
  startdate:'', 
  enddate:'',
};

// data to include: total amount, percentage, 

function PageHome() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div> 
        <h2>Overview</h2>
        <p> Total Savings: ${userInfo.totalSaved}</p> 
        <p> uncategoried money: ${userInfo.totalUncat}</p>
        <button> Move Money to Goal</button>
        <button> Upload Money</button>
      </div>
      
      <div>
        <h1> My Goals</h1>
        <button> Join A Group </button>

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