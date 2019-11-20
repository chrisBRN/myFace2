import React from 'react';
import TempImage from '../Helpers/ImageExists.js'
import { Link } from "react-router-dom";
import '../../Styles/post.scss';

export default function Post(props) {

    let post = props.value;

    return (

        <div className="post">
            <Avatar className="sender" details={post.sender} />
            <TempImage className="postImage" src={post.image} />
            <Avatar className="receipient" details={post.receiver} />
            <MessageText details={post.message} />
        </div>
    );
}

function Avatar(props) {    
          
    let initals = props.details.firstName.charAt(0) + props.details.lastName.charAt(0);
    let image = props.details.profileImage;

    return (
        <div className="avatarContainer">
            <Link to={"users/" + props.details.id}>
                <TempImage className="avatarImage" src={image} />
                <div className={props.className}> {initals} </div>                
            </Link>
        </div>
    );
}

function MessageText(props) {
    return (
        <div className="messageText">{props.details}</div>
    );
}
