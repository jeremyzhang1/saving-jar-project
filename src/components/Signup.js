import React from "react"
import fire from "../config/fire"
import "./Login.css"
import pigImage from "../assets/logo-pig.png"
import {Link} from 'react-router-dom'


class Signup extends React.Component {

    signUp(){
        var username = document.getElementById("email").value
        var password = document.getElementById("password").value

        fire.auth().createUserWithEmailAndPassword(username, password)
            .then((u) => {
                console.log("Successful signed up")
            })
            .catch((err) => {
                console.log("Error: " + err.toString())
            })
    }

    render(){
        return (
            <div>
                <div class="split left">
                    <div class="inner-left">
                        <img class="centered" src={pigImage}></img>
                    </div>
                </div>
                <div class="split right">
                    <div class="inner-right">
                        <div class="login-form centered">
                        <h1> Join Oink! </h1>

                        <div>
                            <input class="login-input" id="name" placeholder="  Your Name" type="text" />
                        </div>


                        <div>
                            <input class="login-input" id="email" placeholder="  Your Email" type="text" />
                        </div>


                        <div>
                            <input class="login-input" id="password" placeholder="  Password" type="text" />
                        </div>
                        <button class="login-button" onClick={this.signUp}>Sign Up! </button>
                        <p class="sign-up"> Already have an account? 
                            <Link to="/login">
                                <button class = 'signup-link' type="button">
                                Log in here
                                </button>
                            </Link> 
                        </p>                        
                    </div>
                </div>
            </div>
            </div>
           
        )
    }
}

export default Signup