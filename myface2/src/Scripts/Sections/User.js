import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import '../../Styles/user.scss';

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
            <h1>Yo</h1> 
            <div>{userInfo.username}</div>
        </div>
    );
}


async function fetchUserInfo(param) {
    const response = await fetch('http://localhost:8080/api/users/' + param);
    return await response.json();
}
