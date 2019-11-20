import React from 'react';

import WelcomePage from './Scripts/WelcomePage.js';
import HomePage from './Scripts/HomePage.js';
import PostsPage from './Scripts/PostsPage';
import UsersPage from './Scripts/UsersPage';
import UserPage from './Scripts/UserPage';

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
      <Route path="/">      <WelcomePage/> </Route>
    </Switch> 
  </Router>
);

}
export default App;
