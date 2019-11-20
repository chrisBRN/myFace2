import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import TempImage from '../Helpers/ImageExists.js'
import Post from '../Sections/Post.js'

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
             <TempImage className="user-bannerImage" src={userInfo.bannerImage} />
             <TempImage className="user-profileImage" src={userInfo.profileImage} />
             <h1 className="user-username">{userInfo.username.toUpperCase()}</h1>
             <div className="user-infoBox">
                <h2 className="user-realname">{userInfo.firstName + " " + userInfo.lastName}</h2>
                <p className="user-contact">{"Contact: " + userInfo.email}</p>
             </div>
             <div className="user-postslist">
                <AllUserPosts value={userId}/>
             </div>
        </div>
    );


}


async function fetchPosts(pageNumber) {
    const response = await fetch('http://localhost:8080/api/posts?page=' + pageNumber);
    return await response.json();
}

function AllUserPosts(userId) {

    const [posts, setPosts] = useState([]);
    const [posts2, setPosts2] = useState([]);
    const [posts3, setPosts3] = useState([]);

    useEffect(
        () => {
            fetchPosts(1).then(response => setPosts(response.items))
            fetchPosts(2).then(response => setPosts2(response.items))
            fetchPosts(3).then(response => setPosts3(response.items))
        },
        []
    );

    const allPosts = posts.map((post) => <Post key={post.id} value={post} />)

    allPosts.push(posts2.map((post) => <Post key={post.id} value={post} />))
    allPosts.push(posts3.map((post) => <Post key={post.id} value={post} />))

    const userPosts = [];

 



    return (
        <div>
            {userPosts}
        </div>
    )


}


