import React from 'react'
import { useState } from 'react';
import { Component } from 'react';

export default class user_component extends Component {
//     const [fname, setFname] = useState("");
//   const [email, setEmail] = useState("");
  constructor(props){
    super(props);
    this.state={
        userData:"",
    };
  }
   componentDidMount(){
        // const{fname,lname,email,password}=User
       
        // console.log(email,password)
        fetch("https://password-reset-backend-x18u.vercel.app/user-demo",
        {
                method: 'POST',
                crossDomain: true,
                body: JSON.stringify({
                  token:window.localStorage.getItem("token")
                }),
                headers: {
                  "Content-Type": "application/json"
                  // Accept: "application/json",
                  // "Access-Control-Allow-Origin": "*",
                },
                
      })
     .then((res)=>res.json())
      
      .then((data)=>{
        console.log(data,"userData")
        this.setState({userData:data.data})
      })
      } 
logout=()=>{
  window.localStorage.clear()
  window.location.href="./sign-in"
}
render(){
  return (
    <div className="home">
       <h2>Welcome,{this.state.userData.fname}❤️</h2>
       <p>Your registered email id is {this.state.userData.email}</p>
       <button onClick={this.logout}>LOGOUT</button>
    </div>
  )
}
}

// export default class user_component extends Component 