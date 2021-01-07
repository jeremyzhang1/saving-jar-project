import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
import { Navbar,Nav} from 'react-bootstrap'
import PageLogin from '../pages/PageLogin';
import PageHome from '../pages/PageHome';
import PageGroups from '../pages/PageGroups';
import PageGoal from '../pages/PageGoal';
import "./Navbar.css"


class BootstrapNavbar extends React.Component{

    render(){
        return(
            <div>
                <Router>
                    <Navbar bg="dark" variant="pills" expand="lg" sticky="top">

                        <Nav className='navigation' class="navbar navbar-expand-md fixed-top">
                            <Nav.Link href="/">Logout</Nav.Link> 
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/groups">Find a Group</Nav.Link>
                            <Nav.Link href="/goal">Goal Page</Nav.Link>
                        </Nav>
                    </Navbar>
                            <br />
                    <Switch>
                        <Route exact path="/" component={PageLogin} />
                        <Route exact path="/home" component={PageHome} />
                        <Route exact path="/groups" component={PageGroups} />
                        <Route exact path="/goal" component={PageGoal} />
                    </Switch>
                </Router>
            </div>
        )  
    }
}

export default BootstrapNavbar;