import React from "react";

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
  creator: 'Carolyn',
  image: 'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/2/1440/540/75/dam/disney-world/admission/WDW_SWGE_1440x540.png?1605208793974',
  imageAlt: 'disney!',
  createDate: '1/17/2020',
<<<<<<< HEAD
  description: 'This is a description of the group. We all want to go to disneyland! Therefore, we should all really try really hard to save for disneyland. And like, we should also really encourage each other to save to go to disneyland. yeah. and im going to keep going on about diensy land. Go disney! ',
=======
>>>>>>> c9cfb06361a0ab23255f67fe4ef6600988400492
  users: users, 
  usersworking: users.length, //need to instead do completed
  userscompleted: 10,
}

function PageGoal() {
  return (
    <div>
      <div>
        <img 
            src = {goalDetails.image}
            alt = "new"
        />
        <h1> Disney World</h1>
        <p> Created By: {goalDetails.creator}</p>
        <p> Date Created: {goalDetails.createDate}</p>
<<<<<<< HEAD
        <p> You and {users.length} other users currently working on this goal | {goalDetails.userscompleted} users have completed this goal</p>

        <p> {goalDetails.description}</p>

        <button> Add Money to My Goal</button>
=======
        <p> {users.length} currently working on this goal | {goalDetails.userscompleted} have completed this goal</p>
>>>>>>> c9cfb06361a0ab23255f67fe4ef6600988400492
      </div>
    </div>
  );
}

export default PageGoal;