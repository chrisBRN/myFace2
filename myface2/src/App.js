import React from 'react';
// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      
    <div>{NavBar()}</div>  
    
    
    

    
    <div>
      <Switch>        
        <Route path="/users"> <Users /> </Route>
        <Route path="/posts"> <Posts /> </Route>
        <Route path="/">      <Home />  </Route>
      </Switch>

    </div>

    <div>{Footer()}</div>  

  </Router>

);

function Welcome(props){

  if (props){
    return <h1>Welcome Back {props.name}</h1>
  }
  else {
    return <h1>Welcome to MyFace 2</h1>
  }
}

function GetName(){  
  return "Dave" // TODO Flesh out once login/users is working
}

function Home() {  
  return (    
    <div className="Home-page">
      <Welcome name={GetName()} />      
    </div>
  ) 
}

function Posts() {
  return <h2>Posts</h2>;
}

function Users() {
  return <h2>Users</h2>;
}  

}

function NavBar(){
  return (

    <div className="Nav-bar" id="Header-nav-bar">
      <nav>
        {/* TODO Logo */}
        
        <Link to="/">Home</Link>        
        <Link to="/posts">Posts</Link>
        <Link to="/users">Users</Link>

      </nav>
    </div>

  )
}

function Footer(){
  return (

    <div className="Nav-bar" id="Footer-nav-bar">
      <nav>
        {/* TODO Logo */}
        FOOTER 
        <Link to="/">Home</Link>        
        <Link to="/posts">Posts</Link>
        <Link to="/users">Users</Link>

        {/* Other Footer Text */}
      </nav>
    </div>
  ) 
}


export default App;
