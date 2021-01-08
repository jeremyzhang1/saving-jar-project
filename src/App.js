import React from 'react'
import './App.css';
//import { Route, Switch, Redirect } from 'react-router-dom';
/*import PageLogin from './pages/PageLogin';
import PageHome from './pages/PageHome';
import PageGroups from './pages/PageGroups';
import PageGoal from './pages/PageGoal';*/
import BootstrapNavbar from './components/NavBar.js';
import fire from './config/fire'

//import Navbar from 'react-bootstrap/Navbar';
//var Bootstrap = require('react-bootstrap')

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

var db = fire.database();

// making goals / groups
function makeGoal(creator, description, group, image, imageAlt, title) {
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
function updateGroupInfo(id, group) {
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
function addMoneyGroups(id, group, addAmnt) {
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
function addMoneyUsers(id, group, addAmnt) {
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
function addMoneyUsersGC(id, group, addAmnt) {
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
function addMoney(id, group, addAmnt) {
  addMoneyGroups(id, group, addAmnt);
  addMoneyUsers(id, group, addAmnt);
}

// gets the current date
function getCurrentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  var today = (today = mm + "/" + dd + "/" + yyyy);
  return today;
}

// add to group groups side
function addToGroupG(current, id, enddate, group, total) {
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
function addToGroupU(current, id, enddate, group, total, color) {
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

export default App;
