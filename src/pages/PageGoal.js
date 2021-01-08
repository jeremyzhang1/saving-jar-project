import React, {Component} from "react";
//import {Helmet} from 'react-helmet';
import GoalPig from '../components/progressPigs/GoalPig.js'
import "./PageGoal.css";
import fire from "../config/fire"
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
  startdate:'', 
  enddate:'', 
}

var db = fire.database();

var goalDetails = {
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
                this.setState({ description: response.disney.groupDetails.description })
                this.setState({ usersworking: response.disney.groupDetails.usersworking })
                this.setState({ userscompleted: response.disney.groupDetails.userscompleted })
                //console.log(this.goalDetails.group_info.image)
            })
            .catch(console.log)
    }

    

// making goals / groups
makeGoal(creator, description, group, image, imageAlt, title) {
  var path = "groups/" + group + "/groupDetails/";
  var updates = {};

  updates[path + "/createDate"] = getCurrentDate();
  updates[path + "/creator"] = creator;
  updates[path + "/description"] = description;
  updates[path + "/image"] = image;
  updates[path + "/imageAlt"] = imageAlt;
  updates[path + "/title"] = title;
  updates[path + "/userscompleted"] = 0;
  updates[path + "/usersworking"] = 0;

  db.ref().update(updates);
}

// upddate group info
updateGroupInfo(id, group) {
  // removes user from group
  var g_users_path = "groups/" + group + "/users/" + id;
  db.ref(g_users_path).remove();

  // updates users completed and working in groups
  var g_groups_path = "groups/" + group;
  return db
    .ref(g_groups_path)
    .once("value")
    .then((snapshot) => {
      var userscompleted = snapshot.val().groupDetails.userscompleted;
      var usersworking = snapshot.val().groupDetails.usersworking;

      var updates = {};
      updates[g_groups_path + "/groupDetails/userscompleted"] =
        userscompleted - 1;
      updates[g_groups_path + "/groupDetails/usersworking"] = usersworking + 1;
      // adding to users list
      db.ref().update(updates);
    });
}

// groups side
addMoneyGroups(id, group, addAmnt) {
  var path = "groups/" + group + "/users/" + id;
  return db
    .ref(path)
    .once("value")
    .then((snapshot) => {
      // users side
      var groupCurrent = snapshot.val().current;
      var updates = {};
      updates[path + "/current"] = groupCurrent + addAmnt;
      db.ref().update(updates);
    });
}

// users side
addMoneyUsers(id, group, addAmnt) {
  var path = "users/" + id;
  return db
    .ref(path)
    .once("value")
    .then((snapshot) => {
      // users side
      var accountTotal = snapshot.val().account.totalInAccount;
      var accountCurrent = snapshot.val().account.totalSaved;
      var updates = {};

      updates[path + "/account/totalSaved"] = accountCurrent + addAmnt;
      updates[path + "/account/totalUncat"] = accountTotal - accountCurrent;

      addMoneyUsersGC(id, group, addAmnt);

      db.ref().update(updates);
    });
}

// users side
addMoneyUsersGC(id, group, addAmnt) {
  var path = "users/" + id + "/currentGroups/" + group;
  return db
    .ref(path)
    .once("value")
    .then((snapshot) => {
      var userGroupCurrent = snapshot.val().current;

      var updates = {};
      updates[path + "/current"] = userGroupCurrent + addAmnt;
      db.ref().update(updates);
    });
}

//add money to your goal
addMoney(id, group, addAmnt) {
  addMoneyGroups(id, group, addAmnt);
  addMoneyUsers(id, group, addAmnt);
}

// gets the current date
getCurrentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  var today = (today = mm + "/" + dd + "/" + yyyy);
  return today;
}

// add to group groups side
addToGroupG(current, id, enddate, group, total) {
  var path = "groups/" + group;
  return db
    .ref(path)
    .once("value")
    .then((snapshot) => {
      var updates = {};

      // fetch for this
      var usersworking = snapshot.val().groupDetails.usersworking;
      //var usersCompleted = snapshot.val().groupDetails.usersCompleted;

      updates[path + "/groupDetails/usersworking"] = usersworking + 1;

      updates[path + "/users/" + id + "/total"] = total;
      updates[path + "/users/" + id + "/current"] = current;
      updates[path + "/users/" + id + "/startdate"] = getCurrentDate();
      updates[path + "/users/" + id + "/enddate"] = enddate;

      //db.ref().update(updates);
    });
}

// adds user to group
addToGroupU(current, id, enddate, group, total, color) {
  return db
    .ref()
    .once("value")
    .then((snapshot) => {
      // adding to users section
      var updates2 = {};
      var u_users_path = "users/" + id + "/currentGroups/" + group;
      updates2[u_users_path + "/color"] = color;
      updates2[u_users_path + "/total"] = total;
      updates2[u_users_path + "/current"] = current;
      updates2[u_users_path + "/startdate"] = getCurrentDate();
      updates2[u_users_path + "/enddate"] = enddate;

      db.ref().update(updates2);
    });
}

// removes user from group
// function removeUserFromGroup(id, group) {
//   updateGroupInfo(id, group);

//   var path = "users/" + id;

//   return db
//     .ref(path)
//     .once("value")
//     .then((snapshot) => {
//       var remove_path = path + "/currentGroups/" + group;

//       // fetch here
//       var startdate = snapshot.val().currentGroups.group.startdate;
//       var enddate = getCurrentDate();
//       var total = snapshot.val().total;

//       // console.log(total);

//       // moving from current to completed group
//       var add_path = path + "/completedGroups/";
//       var updates = {};

//       // fetch here as well
//       var numCompleted = snapshot.val().completedGroups.numCompleted;
//       updates[add_path + "/numCompleted/"] = numCompleted + 1;
//       updates[add_path + "/group/" + group + "/startdate"] = startdate;
//       updates[add_path + "/group/" + group + "/enddate"] = enddate;
//       updates[add_path + "/group/" + group + "/total"] = total;
//       db.ref(add_path).update(updates);

//       // removes from current group
//       db.ref(remove_path).remove();
//     });
// }

// function getName(user_UID, group_name) {
//   var path = "groups/" + group_name + "/users/" + user_UID;
//   //const snapshot = db.ref(path).once("value");
//   db.ref(path).once("value").then((snapshot) => {
//       var data = snapshot.val();
//     });
// }

// gets the json information
// var once = 0;
// function get_json_info(group_name) {
//   if (once == 0) {
//     this.readyState = 3;
//     once = once + 1;
//     return;
//   }
//   var xhttp = new XMLHttpRequest();
//   var rootRef = db.ref();
//   var path = "groups/" + group_name;

//   var adaRef = rootRef.child(path);

//   var adaURL = adaRef.toString();
//   var json_url = adaURL + ".json";

//   xhttp.open(
//     "GET",
//     "https://groups-7995f-default-rtdb.firebaseio.com/groups.json",
//     true
//   );
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && once == 1) {
//       var text = this.responseText;
//       var json = JSON.parse(text);
//       console.log(json["Disney"]["group_info"]["num_active"]);
//       return json;
//     }
//   };
//   xhttp.send();
// }

// // update user info
// function updateUserInfo() {
//   var read_path = user_UID + "/active_groups/" + group_name;
//   return db
//     .ref(read_path)
//     .once("value")
//     .then((snapshot) => {
//       var target_amnt = snapshot.val().target_amnt;
//       var end_date = snapshot.val().end_date;

//       var updates = {};
//       var write_path = user_UID + "/archived_groups/" + group_name;
//       // amount raised
//       updates[write_path + "/amnt_raised"] = target_amnt;
//       //end date
//       updates[write_path + "/end_date"] = end_date;
//       db.ref(write_path).update(updates);
//     });
// }

    render(){
      const addButtonStyle = {
        backgroundColor: "#3a693f",
        color: "#ffffff",
        fontSize: 20,
        height: 50,
        width: 220,
        borderRadius: "20px",
        marginBottom: "10px"
      }
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

        <button class = "uploadbut" onChange={get_json_info(group_name)} > Add Money to My Goal</button>
        <GoalPig others = {users} thisUser = {userSample}/>
                <div class = "boxStyle">
                  <h2>My Progress:</h2>
                  <GoalPig others = {users} thisUser = {userSample}/>
                  <p style={{color: "#3A693F"}}>You have saved: ${userSample.current}</p>
                  <p style={{color: "#3A693F"}}>You still need to save: ${userSample.total - userSample.current}</p>
                  <button style={addButtonStyle}> Add To Your Goal</button>
                </div>

              </div>
            </div>
          );
    }
}

export default PageGoal;