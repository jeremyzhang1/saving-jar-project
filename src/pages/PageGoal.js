import React, {Component} from "react";
import {Helmet} from 'react-helmet';
import GoalPig from '../components/progressPigs/GoalPig.js'
import "./PageGoal.css";
//import '/Users/carolynqu/c1_materials/saving-jar-project/src/pages/PageGoal.css'

const users = [
    { id: 1, percentage: 20 },
    { id: 2, percentage: 20 },
    { id: 3, percentage: 20 },
    { id: 4, percentage: 20 },
    { id: 5, percentage: 20 },
]

const userSample = {
    group: "disney",
    id: 2,
    bgcolor: "#6a1b9a",
    total: 100,
    current: 60,
    completed: 60,
    startdate: '',
    enddate: '',
}

// const goalDetails = {
//     title: 'Trip to Disneyworld!',
//     creator: 'Carolyn',
//     image: 'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/2/1440/540/75/dam/disney-world/admission/WDW_SWGE_1440x540.png?1605208793974',
//     imageAlt: 'disney!',
//     createDate: '1/17/2020',
//     description: 'This is a description of the group. We all want to go to disneyland! Therefore, we should all really try really hard to save for disneyland. And like, we should also really encourage each other to save to go to disneyland. yeah. and im going to keep going on about diensy land. Go disney! ',
//     users: users,
//     usersworking: users.length, //need to instead do completed
//     userscompleted: 10,
// }

const createButtonStyle = {
    backgroundColor: "#0e71a9",
    color: "#ffffff",
    fontSize: 16,
    height: 40,
    width: 300,
    borderRadius: "20px",
    marginBottom: "10px"
}

class PageGoal extends Component {
    constructor() {
        super()
        this.state = {
            title: "",
            creator: "",
            image: "",
            imageAlt: "",
            createDate: "",
            description: "",
            usersworking: 0,
            userscompleted: 0
        }
    }

    componentDidMount() {
        fetch("https://saving-jar-project-default-rtdb.firebaseio.com/groups.json")
            .then(response => response.json())
            .then(response => {
                this.setState({ title: response.disney.groupDetails.title })
                this.setState({ creator: response.disney.groupDetails.creator })
                this.setState({ image: response.disney.groupDetails.image })
                this.setState({ imageAlt: response.disney.groupDetails.imageAlt })
                this.setState({ createDate: response.disney.groupDetails.createDate })
                this.setState({ usersworking: response.disney.groupDetails.usersworking })
                this.setState({ userscompleted: response.disney.groupDetails.userscompleted })
                //console.log(this.goalDetails.group_info.image)
            })
            .catch(console.log)
    }

    render(){
        return (
            <div class = "larger">
              {/* <Helmet>
                  <style>{'body { background-color: #C8E1EF; }'}</style>
              </Helmet> */}
              <div class = "larger">
                <div class = "cover">
                  <img 
                    class= "coverphoto"
                    src = {this.state.image}
                    alt = {this.state.imageAlt}
                  />
                  <h1 className = "title">{this.state.title}</h1>
                </div>

                <div class = "goaldetails">
                  <p class = "smalldet"> <b>Created By:</b> {this.state.creator}</p>
                  <p class = "smalldet"> <b>Date Created:</b> {this.state.createDate}</p>
                  <p class = "descr"> You and {users.length} other users currently working on this goal | {this.state.userscompleted} users have completed this goal</p>
                  <p class = "descr"> <b>Goal Description:</b> {this.state.description}</p>
                </div>

                <button class = "uploadbut" > Add Money to My Goal</button>
                <GoalPig others = {users} thisUser = {userSample}/>

              </div>
            </div>
          );
    }
}

export default PageGoal;