import React, {Component} from "react";
import {Helmet} from 'react-helmet';
import GoalPig from '../components/progressPigs/GoalPig.js'
import "./PageGoal.css";
//import '/Users/carolynqu/c1_materials/saving-jar-project/src/pages/PageGoal.css'

const users = [
  {id : 1, percentage : 20}, 
  {id : 2, percentage : 20}, 
  {id : 3, percentage : 20}, 
  {id : 4, percentage : 20}, 
  {id : 5, percentage : 20}, 
]

const userSample = {
  group: "disney", 
  id: 2, 
  bgcolor: "#6a1b9a", 
  total: 100, 
  current: 60, 
  completed: 60,
  startdate:'', 
  enddate:'',
}

const goalDetails = {
  title: 'Trip to Disneyworld!',
  creator: 'Carolyn',
  image: 'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/2/1440/540/75/dam/disney-world/admission/WDW_SWGE_1440x540.png?1605208793974',
  imageAlt: 'disney!',
  createDate: '1/17/2020',
  description: 'This is a description of the group. We all want to go to disneyland! Therefore, we should all really try really hard to save for disneyland. And like, we should also really encourage each other to save to go to disneyland. yeah. and im going to keep going on about diensy land. Go disney! ',
  users: users, 
  usersworking: users.length, //need to instead do completed
  userscompleted: 10,
}

function PageGoal() {
  return (
    <div class = "larger">
      {/* <Helmet>
          <style>{'body { background-color: #C8E1EF; }'}</style>
      </Helmet> */}
      <div class = "larger">
        <div class = "cover">
          <img 
            class= "coverphoto"
            src = {goalDetails.image}
            alt = {goalDetails.imageAlt}
          />
          <h1 class = "title">{goalDetails.title}</h1>
        </div>

        <div class = "goaldetails">
          <p class = "smalldet"> <b>Created By:</b> {goalDetails.creator}</p>
          <p class = "smalldet"> <b>Date Created:</b> {goalDetails.createDate}</p>
          <p class = "descr"> You and {users.length} other users currently working on this goal | {goalDetails.userscompleted} users have completed this goal</p>
          <p claas = "descr"> <b>Goal Description:</b> {goalDetails.description}</p>
        </div>

        <button class = "uploadbut" > Add Money to My Goal</button>
        <GoalPig others = {users} thisUser = {userSample} style={{marginBottom: "400px"}}/>

      </div>
    </div>
  );
}

export default PageGoal;