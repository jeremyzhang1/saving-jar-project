import React from "react";
import DashboardPig from "../components/progressPigs/DashboardPig.js";

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
        Home
        <DashboardPig myPigTest 
          bgcolor = {testData.bgcolor} 
          current = {testData.current}
          total = {testData.total} 
          completed = {testData.completed}>
          </DashboardPig>
    </div>
  );
}

export default PageHome;