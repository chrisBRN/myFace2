import React from 'react';

import WelcomePage from './Scripts/WelcomePage.js';
import HomePage from './Scripts/HomePage.js';
import PostsPage from './Scripts/PostsPage';
import UsersPage from './Scripts/UsersPage';

import './Styles/App.scss';

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
      <Route path="/">      <WelcomePage/> </Route>
    </Switch> 
  </Router>
);





async function FetchJson(url){  
  const response = await fetch(url);   
  const json = await response.json();  
  return JSON.stringify(json);
}

function GetPosts(){
  
  let data = FetchJson("http://localhost:8080/api/posts"); 

  data.then(jsonString => console.log(jsonString))  

return <div></div>
}




}
export default App;
