import React, { Component, useState } from "react";

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  // const handleSubmit = (e) => {
  //   if (userType == "Admin" && secretKey != "AdarshT") {
  //     e.preventDefault();
  //     alert("Invalid Admin");
  //   } else {
  //     e.preventDefault();

  //     console.log(fname, lname, email, password);
  //     fetch("http://localhost:5000/register", {
  //       method: "POST",
  //       crossDomain: true,
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       body: JSON.stringify({
  //         fname,
  //         email,
  //         lname,
  //         password,
  //         userType,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data, "userRegister");
  //         if (data.status == "ok") {
  //           alert("Registration Successful");
  //         } else {
  //           alert("Something went wrong");
  //         }
  //       });
  //   }
  // };
const handleSubmit=async(e)=>{
  // const{fname,lname,email,password}=User
  e.preventDefault()
  console.log(fname,lname,email,password)
  let result=await fetch("https://password-reset-backend-x18u.vercel.app/register-demo",
  {
          method: 'POST',
          crossDomain: true,
          body: JSON.stringify({
            fname,
            lname,
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
}

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form >
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
              value={fname}
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
              value={lname}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div className="d-grid">
            <div className="btn-sign">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Sign Up
            </button>
            </div>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
