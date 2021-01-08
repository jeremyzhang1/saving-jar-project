import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { Navbar,Nav} from 'react-bootstrap'
import PageLogin from '../pages/PageLogin';
import PageSignup from '../pages/PageSignup';
import PageHome from '../pages/PageHome';
import PageGroups from '../pages/PageGroups';
import PageGoal from '../pages/PageGoal';
import "./Navbar.css";
import fire from "../config/fire"

class BootstrapNavbar extends React.Component{

    logout(){
        fire.auth().signOut();
    }

    render(){
        return(
            <div>
                <Router>
                    <Navbar bg="dark" variant="pills" expand="lg" sticky="top" style={{position: "absolute", width: "100%"}}>
                        <Nav className='navigation' class="navbar navbar-expand-md navbar-fixed-top">

                            <Nav.Link onSelect={this.logout} href="/login">Logout</Nav.Link> 
                            <Nav.Link id="ghome" href="/home"  >Home</Nav.Link>
                            <Nav.Link id="bgroup" href="/groups" >Find a Group</Nav.Link>
                            <Nav.Link href="/goal">Goal Page</Nav.Link>
                            {/* <Button bsStyle="primary">Login</Button> */}
                        </Nav>
                    </Navbar>
                            <br />
                    <Switch>
                        <Route exact path="/login" component={PageLogin} />
                        <Route exact path="/home" component={PageHome} />
                        <Route exact path="/groups" component={PageGroups} />
                        <Route exact path="/goal" component={PageGoal} />
                        <Route exact path="/signup" component={PageSignup} />
                        <Route component={() => this.logout} />
                    </Switch>
                </Router>
            </div>
        )  
    }
}

export default BootstrapNavbar;