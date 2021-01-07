import React from "react"
import fire from "../config/fire"

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
            <div style={{ textAlign: 'center' }}>
                <div>
                    <div>Email</div>
                    <input id="email" placeholder="Enter email..." type="text" />
                </div>
                <div>
                    <div>Password</div>
                    <input id="password" placeholder="Enter Password..." type="text" />
                </div>
                <button style={{margin: '10px'}} onClick={this.login}>Login</button>
                <button style={{margin: '10px'}} onClick={this.signUp}>Sign Up</button>
            </div>
        )
    }
}

export default Login