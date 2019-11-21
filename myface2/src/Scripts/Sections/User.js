import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import TempImage from '../Helpers/ImageExists.js';
import { fetchUserSingleInfo } from '../Helpers/APIFetchers.js';


import '../../Styles/user.scss';

export default function User(){       
    
    let {userId} = useParams();
    const [userInfo, setUserInfo] = useState(null);

    useEffect(
        () => { fetchUserSingleInfo(userId).then(response => setUserInfo(response)) },
        [userId]
    );
    
    if (!userInfo) {
        return <div>Fetching User Data</div>;
    }
    
    return (  
        <div>            
             <TempImage className="user-bannerImage" src={userInfo.bannerImage} />
             <TempImage className="user-profileImage" src={userInfo.profileImage} />
             <h1 className="user-username">{userInfo.username.toUpperCase()}</h1>
             <div className="user-infoBox">
                <h2 className="user-realname">{userInfo.firstName + " " + userInfo.lastName}</h2>
                <p className="user-contact">{"Contact: " + userInfo.email}</p>
             </div>            
        </div>
    );
}