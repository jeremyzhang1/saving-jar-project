import React from "react"
import fire from "../config/fire"
import "./Login.css"
import pigImage from "../assets/logo-pig.png"

class Login extends React.Component {


    login(){
        var username = document.getElementById("email").value
        var password = document.getElementById("password").value

        fire.auth().signInWithEmailAndPassword(username, password)
            .then((u) => {
                console.log("Successful log in")
            })
            .catch((err) => {
                console.log("Error: " + err.toString())
            })
    }

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
                        <h1> Welcome Back! </h1>
                        <div>
                            <input class="login-input" id="email" placeholder="  Your Email" type="text" />
                        </div>
                        <div>
                            <input class="login-input" id="password" placeholder="  Password" type="text" />
                        </div>
                        <button class="login-button" onClick={this.login}>Login</button>
                        <p class="sign-up"> Don't have an account? <button class="signup-link" onClick={this.signUp}>Sign up here</button> </p>
                        </div>
                </div>
            </div>
            </div>
           
        )
    }
}

export default Login