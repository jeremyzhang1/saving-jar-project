import React from "react";
import PageHome from "./PageHome";
import Signup from "../components/Signup";
import fire from "../config/fire";

class PageSignup extends React.Component {
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
                {this.state.user ? <PageHome /> : <Signup />}
            </div>
        );
    }
}

export default PageSignup;