import React from 'react';

import WelcomePage from './Scripts/Pages/WelcomePage.js';
import HomePage from './Scripts/Pages/HomePage.js';
import PostsPage from './Scripts/Pages/PostsPage';
import UsersPage from './Scripts/Pages/UsersPage';
import UserPage from './Scripts/Pages/UserPage';

import './Styles/App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";

function App() {  
  return (
    <Router>       
    <Switch>     
      <Route path="/users/:userId"> <UserPage /> </Route>   
      <Route path="/users"> <UsersPage /> </Route>      
      <Route path="/posts"> <PostsPage /> </Route>
      <Route path="/home">  <HomePage /> </Route>
      <Route exact path="/">      <WelcomePage/> </Route>
    </Switch> 
  </Router>
);

}
export default App;
