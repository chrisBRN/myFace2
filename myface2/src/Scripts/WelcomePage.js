import React from 'react';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default function WelcomePage() {  
    return (    
      <div className="Welcome-page">
        <WelcomeMessage name={GetName()} />          
      </div>
    ) 
  }

function WelcomeMessage(props){

    let message = "Welcome to MyFace 2";
  
    if (props){
        message = "Welcome Back " + props.name
    }  
  
    return <h1><Link to="/home">{message}</Link></h1>
}
  
function GetName(){  
    return "Dave" // TODO Flesh out once login/users is working
}