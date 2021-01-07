import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import PageLogin from './pages/PageLogin';
import PageHome from './pages/PageHome';
import PageDashboard from './pages/PageDashboard';
import PageGroups from './pages/PageGroups';
import Navbar from 'react-bootstrap/Navbar';
var Bootstrap = require('react-bootstrap')

// import bootstrap 


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
        <Route exact path="/dashboard" component={PageDashboard} />
        <Route exact path="/groups" component={PageGroups} />
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;
