import React from 'react';

import {    
    Link
  } from "react-router-dom";

export default function Post(props){
    
    let post = props.value;    
    
    return (
  
      <div className="Post">   
        <Avatar details={post.sender}/>   
        <PostImage details={post.image}/>
        <Avatar details={post.receiver}/>        
        <MessageText details={post.message}/>
      </div>
    ) 
}

function PostImage(props){
    //TODO do something if null/dead link
    return (
        <img class="postImage" src={props.details}></img>
    )
}

function Avatar(props){ 

    let firstName = props.details.firstName;
    let lastName = props.details.lastName;
    //TODO do something if null/dead link
    let image = props.details.profileImage;

    return(
        
        <div className="post-sender">
            <Link to="">
                {firstName + " " + lastName}
                <img src={image}></img>
            </Link>
        </div>        
    )
}

function MessageText(props){
    return (
    <div>{props.details}</div>

    )
}