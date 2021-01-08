import React, { Component } from "react";
import DashboardPig from "../components/progressPigs/DashboardPig.js";
import { Link } from 'react-router-dom';
import './PageHome.css';
import { Helmet } from 'react-helmet';


// const userData = [
//     {
//         group: "disney",
//         bgcolor: "#6a1b9a",
//         total: 100,
//         current: 60,
//         completed: 60,
//         startdate: '',
//         enddate: '',
//     },
//     {
//         group: "monthly payments",
//         bgcolor: "#17641A",
//         total: 200,
//         current: 10,
//         completed: 5,
//         startdate: '',
//         enddate: '',
//     }
// ]

// const userInfo = {
//     id: '',
//     groups: userData,
//     totalInAccount: 100,
//     totalSaved: 70,
//     totalUncat: 30,
// }

const largeButtonStyle = {
    backgroundColor: "#3A693F",
    color: "#ffffff",
    fontSize: 16,
    height: 45,
    width: 300,
    borderRadius: "20px",
    marginBottom: "10px"
}

const smallButtonStyle = {
    backgroundColor: "#3A693F",
    color: "#ffffff",
    fontSize: 14,
    height: 35,
    width: "175px",
    borderRadius: "20px",
    margin: "10px",
    boxShadow: "0px 4px 40px rgba(51, 66, 53, 0.40)"
}

const whiteBack = {
  backgroundColor: "white",
  maxWidth: "1200px",
  justifyContent:"center",
  alignItems: "center",
  textAlign: "center",
  width: "60%",
  margin: "auto",
  marginTop: "50px",
  padding: "30px",
  borderRadius: "50px"
}

const heading = {
  fontSize: 60,
  marginTop: 70
}

const goalTitle = {
  textAlign: "left",
  margin: "1%",
  fontSize: 50,
}

const goalHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "2%",
}

const goalBtnStyle = {
  backgroundColor: "#3A693F",
  color: "#FFFFFF",
  fontSize: "25px",
  height: "55px",
  width: "100%",
  borderRadius: "50px",
  borderWidth: "0px",
  marginRight: "40px",
  boxShadow: "0px 4px 40px rgba(51, 66, 53, 0.40)"
}

const lineStyle = {
  borderWidth: "2px",
}
// data to include: total amount, percentage, 

class PageHome extends Component {
    constructor() {
        super()
        this.state = {
            totalInAccount: 0,
            totalSaved: 0,
            totalUncat: 0,
            userData1: [
                {
                    group: "",
                    bgcolor: "",
                    total: 0,
                    current: 0,
                    completed: 0,
                    startdate: "",
                    enddate: "",
                }
            ],
            userData2: [
                {
                    group: "",
                    bgcolor: "",
                    total: 0,
                    current: 0,
                    completed: 0,
                    startdate: "",
                    enddate: "",
                }
            ],
            userData3: [
                {
                    group: "",
                    bgcolor: "",
                    total: 0,
                    current: 0,
                    completed: 0,
                    startdate: "",
                    enddate: "",
                }
            ]
        }
    }

    componentDidMount() {
        fetch("https://saving-jar-project-default-rtdb.firebaseio.com/users/1231123/currentGroups.json")
            .then(response => response.json())
            .then(response => {

                this.setState({
                    userData1: {
                        group: response.disney.name,
                        bgcolor: response.disney.color,
                        total: response.disney.total,
                        current: response.disney.current,
                        completed: response.disney.completed,
                        startdate: response.disney.startdate,
                        enddate: response.disney.enddate
                    }
                })

                this.setState({
                    userData2: {
                        group: response.monthlyPayments.name,
                        bgcolor: response.monthlyPayments.color,
                        total: response.monthlyPayments.total,
                        current: response.monthlyPayments.current,
                        completed: response.monthlyPayments.completed,
                        startdate: response.monthlyPayments.startdate,
                        enddate: response.monthlyPayments.enddate
                    }
                })
            })
            .catch(console.log)

        fetch("https://groups-7995f-default-rtdb.firebaseio.com/users/1231123/account.json")
            .then(response => response.json())
            .then(response => {
                this.setState({ totalInAccount: response.totalInAccount })
                this.setState({ totalSaved: response.totalSaved })
                this.setState({ totalUncat: response.totalUncat })
            })
            .catch(console.log)
    }

    render() {
        return (
            <div className="pageHome">
                <Helmet>
                    <style>{'body { background-color:  #CBE2C5; }'}</style>
                </Helmet>

                <h1 style={heading}>My Dashboard</h1>
                <div class="rectangle" style={whiteBack}>
                    <div>
                        <h2 style={goalTitle}>Overview</h2>
                        <hr style={lineStyle}></hr>
                        <p> Total Savings: ${this.state.totalSaved}</p>
                        <p> Available Funds: ${this.state.totalUncat}</p>
                        <button style={smallButtonStyle} class="btn"> Move Money to Goal</button>
                        <button style={smallButtonStyle} class="btn"> Upload Money</button>
                    </div>

                </div>

                <div style={whiteBack}>
                    <div style={goalHeader}>
                      <h1 style={goalTitle}> My Goals</h1>
                      <Link to="/groups">
                          <button class="btn" type="button">
                              Join a Goal
                    </button>
                      </Link>
                    </div>
                    <hr style={lineStyle}></hr>
                    
                    {/*userData.map((item, index) => (
                  <DashboardPig key ={index}  
                  bgcolor = {item.bgcolor} 
                  current = {item.current}
                  total = {item.total} 
                  completed = {item.completed}>
                  </DashboardPig>        
                ))*/}
                    <DashboardPig
                        bgcolor={this.state.userData1.bgcolor}
                        current={this.state.userData1.current}
                        total={this.state.userData1.total}
                        completed={this.state.userData1.completed}>
                    </DashboardPig>
                    <DashboardPig
                        bgcolor={this.state.userData2.bgcolor}
                        current={this.state.userData2.current}
                        total={this.state.userData2.total}
                        completed={this.state.userData2.completed}>
                    </DashboardPig>
                    <DashboardPig
                        bgcolor={this.state.userData3.bgcolor}
                        current={this.state.userData3.current}
                        total={this.state.userData3.total}
                        completed={this.state.userData3.completed}>
                    </DashboardPig>
                </div>


            </div>


        );
    }
}

export default PageHome;