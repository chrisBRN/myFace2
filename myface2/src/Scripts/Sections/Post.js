import React from 'react';
import TempImage from '../Helpers/ImageExists.js'
import { Link } from "react-router-dom";
import '../../Styles/post.scss';

export default function Post(props) {

    let post = props.value;

    return (
        //TODO this is causing a memory leak...
        <div className="post">
            <div className="postBody">
                <Avatar className="sender" details={post.sender} />
                <TempImage className="postImage" src={post.image} />
                <Avatar className="receipient" details={post.receiver} />
            </div>
            <MessageText details={post.message} />
        </div>
    );
}

function Avatar(props) {    
          
    let initals = props.details.firstName.charAt(0) + props.details.lastName.charAt(0);
    let image = props.details.profileImage;

    return (
        <div className={props.className}>
            <Link to={"/users/" + props.details.id}>

                <TempImage className="avatarImage" src={image} /> 
                <div className="avatarText">{initals}</div>    

            </Link>
        </div>
    );
}

function MessageText(props) {
    return (
        <div className="messageText">
            <details>
                <summary>More</summary>
                <p>{props.details}</p>
            </details>
        </div>
    );
}
