import React, { Component, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit=async(e)=>{
    // const{fname,lname,email,password}=User
    e.preventDefault()
    console.log(email,password)
    let result=await fetch("https://password-reset-backend-x18u.vercel.app/login-demo",
    {
            method: 'POST',
            crossDomain: true,
            body: JSON.stringify({
              email,
              password,
              
            }),
            headers: {
              "Content-Type": "application/json"
              // Accept: "application/json",
              // "Access-Control-Allow-Origin": "*",
            },
            
  })
  result= await result.json()
  .then((data)=>{
    console.log(data,"userRegister")
    if(data.status=="ok"){
      alert("login successful")
      window.localStorage.setItem("token",data.token)
      window.localStorage.setItem("loggedIn",true)
      window.location.href="./user-details"
    }
  })
  
}

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form >
          <h3>Sign In</h3>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div> */}

          <div className="d-grid">
            <div className="btn-sign">
          <button variant="contained"  type="button" className='btn-signin' onClick={handleSubmit} >Sign In</button> 
          </div>
          </div>
          <p className="forgot-password text-right">
            <a href="/sign-up">Sign Up</a><br></br>
            <a href="/reset-password">Forget password?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
