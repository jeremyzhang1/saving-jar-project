import React from "react";

import PageHome from "./PageHome";
import Login from "../components/Login";
import fire from "../config/fire";

class PageLogin extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: null
        }

        this.authListener = this.authListener.bind(this)
    }

    componentDidMount() {
        this.authListener()
    }

    authListener(){
        fire.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({ user })
            }else{
                this.setState({ user: null }) 
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.user ? <PageHome /> : <Login />}
            </div>
        );
    }
}

export default PageLogin;