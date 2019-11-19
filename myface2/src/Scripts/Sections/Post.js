import React from 'react';

import placeholder_avatar from '../../Resources/placeholder_avatar.png';
import placeholder_image from '../../Resources/placeholder_image.png';

import {
    Link
} from "react-router-dom";

import '../../Styles/post.scss';

export default function Post(props) {

    let post = props.value;

    return (

        <div className="post">
            <div className="sender"><Avatar details={post.sender} /></div>
            <PostImage details={post.image} />
            <div className="receipient"><Avatar details={post.receiver} /></div>
            <MessageText details={post.message} />
        </div>
    )
}

function PostImage(props) {
    
    let image = props.details;
    if (!ImageExists(image)){
        image = placeholder_image;
    }
    
    return (
        <img className="postImage" src={image}></img>
    )
}

function Avatar(props) {    
          
    let initals = props.details.firstName.charAt(0) + props.details.lastName.charAt(0);
    let image = props.details.profileImage;

    if (!ImageExists(image)){        
        image = placeholder_avatar;
    }

    return (
        <div className="avatarContainer">
            <Link to="">
                <img className="avatarImage" src={image}></img>
                <div className="avatarText"> {initals} </div>                
            </Link>
        </div>
    )
}

function MessageText(props) {
    return (
        <div className="messageText">{props.details}</div>
    )
}

function ImageExists(url){

    let client = new XMLHttpRequest();
    client.open("GET", url, false);
    client.send();   

    return !(client.status === 404);
}