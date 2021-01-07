import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import PageLogin from './pages/PageLogin';
import PageHome from './pages/PageHome';
import PageGroups from './pages/PageGroups';
import PageGoal from './pages/PageGoal';

import Navbar from 'react-bootstrap/Navbar';
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
      <nav className='navigation' class="navbar navbar-expand-md fixed-top">
    	  	<ul>
        		<li><a href="/"> Login</a></li>
			      <li><a href="/home"> PageHome</a></li>
			      <li><a href="/dashboard">PageDashboard</a></li>
			      <li><a href="/groups">PageGroups</a></li>
    		  </ul>
		    </nav>
      <Switch>
        <Route exact path="/" component={PageLogin} />
        <Route exact path="/home" component={PageHome} />
        <Route exact path="/groups" component={PageGroups} />
        <Route exact path="/goal" component={PageGoal} />
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}
// addToGroup(user_UID, group_name, target_amnt)
// removeFromGroup(user_UID, group_id)

// making groups
// function makeGroup(group_name) {
//   var updates = {};
//   var path = group_name;
//   updates[path + "/information/num_completed"] = 0;
//   updates[path + "/information/num_active"] = 1;
// }

// add information of group
// db would be different here
function addGroupInfo() {
  var path = "groups/" + group_name + "/group_info/";
  return db
    .ref(path)
    .once("value")
    .then((snapshot) => {
      var num_active = snapshot.val().num_active;

      var updates = {};
      updates[path + "/num_active"] = num_active + 1;
      db.ref().update(updates);
    });
}

// remove information of group
function updateGroupInfo(user_UID, group_name) {
  var path = "groups/" + group_name + "/group_info/";
  return db
    .ref(path)
    .once("value")
    .then((snapshot) => {
      var num_active = snapshot.val().num_active;
      var num_completed = snapshot.val().num_completed;

      var updates = {};
      updates[path + "/num_active"] = num_active - 1;
      updates[path + "/num_completed"] = num_completed + 1;
      // adding to users list
      db.ref().update(updates);
    });
}

var user_UID = "53253313414";
var group_name = "kings dominion";
var target_amnt = 10;
// adds user to group
function addToGroup(user_UID, group_name, target_amnt) {
  var updates = {};
  var path = "groups/" + group_name + "/users/" + user_UID;
  updates[path + "/current_amnt"] = 0;
  updates[path + "/target_amnt"] = target_amnt;

  // use something for timedata format
  updates[path + "/start_date"] = "01 / 01 / 2021";
  updates[path + "/end_date"] = "01 / 02 / 2021";

  // group information path
  var group_info_path = "groups/" + group_name + "/group_info/";
  updates[group_info_path + "/num_completed"] = 0;
  updates[group_info_path + "/num_active"] = 1;
  db.ref().update(updates);

  addGroupInfo();
}

var amnt_to_add = 1231;
// add money to your goal
function addMoney(user_UID, group_name, amnt_to_add) {
  var path = "groups/" + group_name + "/users/" + user_UID;
  return db
    .ref(path)
    .once("value")
    .then((snapshot) => {
      var current_amnt = snapshot.val().current_amnt;

      var updates = {};
      updates[path + "/current_amnt"] = current_amnt + amnt_to_add;
      db.ref().update(updates);
    });
}

// removes user from group
function removeUserFromGroup(user_UID, group_name) {
  // read for curr and target amnt
  // if they are not the same, inform the user they are not done (alert)
  // these use different dbs
  updateGroupInfo(user_UID, group_name);

  //removes group from user's active_groups section
  var path = "groups/" + group_name + "/users/" + user_UID;
  db.ref(path).remove();
}
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
