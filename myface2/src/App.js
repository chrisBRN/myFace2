import React from 'react';
import logo from './newlogo-non-transparent.png';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>       
    <Switch>        
      <Route path="/users"> <UsersPage /> </Route>
      <Route path="/posts"> <PostsPage /> </Route>
      <Route path="/home">  <HomePage /> </Route>
      <Route path="/">      <IndexPage /> </Route>
    </Switch> 
  </Router>

);

//  ============================================================================
//  Helpers ====================================================================
//  ============================================================================

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

async function FetchJson(){

  let url = 'http://localhost:8080/api/posts';
  let response = await fetch(url); 
  let posts = response.json(); 
      
  let post = JSON.parse(posts, function(key, value) {
      if (key === id) {
        return value; 
      }
      
    }
  )
  return post;

  // return post (
  
  //   // <div>

  //   //   {this.state.arrayFromJson.map(function(posts) {
  //   //     return (
  //   //       <SomeComponent key={posts.id} data={posts} />
  //   //     );

  //   //   })}  
  //   // </div>
  // )
}

//  ============================================================================
//  Pages   ====================================================================
//  ============================================================================

function IndexPage() {  
  return (    
    <div className="Welcome-page">
      <WelcomeMessage name={GetName()} />          
    </div>
  ) 
}

function HomePage() {
  return (
    <div>
      <NavBar/> 
      <h2 className="Page-Title">Home</h2>
      <Footer/>
    </div>
  )    
}

function PostsPage() { 

  return (
    <div>
      <NavBar/> 
      
      <h2>Posts {FetchJson()} </h2>
      <Footer/>
    </div>
  )  
}

function UsersPage() {
  return  (
    <div>
      <NavBar/> 
      <h2>Users</h2>
      <Footer/>
    </div>
  )
}  

//  ============================================================================
//  Sections    ================================================================
//  ============================================================================

function NavBar(){
  return (

    <div className="Nav-bar" id="Header-nav-bar">
      <nav>    
        <Link to="/home"><img className="logo" src={logo} alt="logo"/></Link>        
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
        FOOTER   
        <Link to="/"> Home </Link>        
        <Link to="/posts"> Posts </Link>
        <Link to="/users"> Users </Link>

        {/* Other Footer Text */}
      </nav>
    </div>
  ) 
}

}
export default App;
