import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import TempImage from '../Helpers/ImageExists.js'

import '../../Styles/user.scss';


async function fetchUserInfo(param) {
    const response = await fetch('http://localhost:8080/api/users/' + param);
    return await response.json();
}

export default function User(){       
    
    let {userId} = useParams();
    const [userInfo, setUserInfo] = useState(null);

    useEffect(
        () => { fetchUserInfo(userId).then(response => setUserInfo(response)) },
        [userId]
    );
    
    if (!userInfo) {
        return <div>Fetching User Data</div>;
    }
    
    return (  
        <div>            
             <TempImage className="bannerImage" src={userInfo.bannerImage} />
             <TempImage className="profileImage" src={userInfo.profileImage} />
             <h1 class="username">{userInfo.username.toUpperCase()}</h1>
             <div class="infoBox">
                <h2 class="realname">{userInfo.firstName + " " + userInfo.lastName}</h2>
                <p class="contact">{"Contact: " + userInfo.email}</p>
             </div>
             <div class="postslist">
                 
             </div>
        </div>
    );
}

