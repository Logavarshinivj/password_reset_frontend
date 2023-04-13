import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Router,Routes } from 'react-router-dom'
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/user_component";
import Reset from "./components/reset";

function App() {
const isLoggedIn=window.localStorage.getItem("loggedIn")

  return (
   
    <div className="App">
      <Routes>
      {/* <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} /> */}
      <Route path="/" element={isLoggedIn=="true" ? <UserDetails />:<Login />}/>
      <Route path="/sign-in" element={< Login title='login' /> } />
      <Route path="/sign-up" element={< SignUp title='signup' /> } />
      <Route path="/user-details" element={< UserDetails title='user' /> } />
      <Route path="/reset-password" element={<Reset title='reset' />} />
      </Routes>
      
    </div>
    
  )
}

export default App
