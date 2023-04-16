import React from 'react'
import { useState } from 'react';
import { Component } from 'react';

export default class Reset extends Component {
//     const [fname, setFname] = useState("");
//   const [email, setEmail] = useState("");
  constructor(props){
    super(props);
    this.state={
        email:"",
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  
        // const{fname,lname,email,password}=User
       
        // console.log(email,password)
      handleSubmit(e){
        const{email}=this.state
        console.log(email)
        fetch("https://password-reset-backend-x18u.vercel.app/forget-password",
        {
                method: 'POST',
                crossDomain: true,
                body: JSON.stringify({
                 email,
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
       if(data.status=="notok"){
          alert("user not exists")
       }
      })
      } 
    

render(){
  return (
    <div className="auth-wrapper">
      <div className='auth-inner'>
       <form >
          <h3>Sign In</h3>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => this.setState({email: e.target.value})}
            />
          </div>
          <div className="d-grid">
            <div className="btn-sign">
          <button variant="contained"  type="button" className='btn-signin' onClick={this.handleSubmit} >Send</button> 
          </div>
          </div>
          <p className="forgot-password text-right">
            <a href="/sign-up">Sign Up</a>
          </p>
          </form>

    </div>
 </div>
  )
}
}

// export default class user_component extends Component 