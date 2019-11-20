import React, { useState, useEffect } from 'react';

import { useParams } from "react-router-dom";

import TempImage from '../Helpers/ImageExists.js'

import '../../Styles/user.scss';

export default function User(){    

    let user = UserInfo();   

    console.log(user);
    console.log(user.bannerImage);
    
    return (  
        <div>
            <h1>Yo</h1> 
            <TempImage src={user.bannerImage} />
        </div>
    )
}


async function fetchUserInfo(param) {
    console.log("PARAM " + param)
    const response = await fetch('http://localhost:8080/api/users/' + param);
    return await response.json();
}

function UserInfo(){

    let {userId} = useParams();

    const [userInfo, setUserInfo] = useState([]);

    useEffect(
        () => { fetchUserInfo(userId).then(response => setUserInfo(response)) },
        []
    );  

    return userInfo;    
}


// const allUsers = users.map((user) =>
// <User key={user.id}
//     value={user} />
// )

// return (
// <div>
//     {allUsers}
// </div>
// )

// id	2
// email	"kcoppin1@ifeng.com"
// username	"kcoppin1"
// profileImage	"https://picsum.photos/id/101/400/400"
// firstName	"Keane"
// bannerImage	"https://picsum.photos/id/201/1600/400"
// lastName	"Coppin"