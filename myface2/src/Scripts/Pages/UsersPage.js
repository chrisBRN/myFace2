import React, { useState, useEffect } from 'react';

import Header from '../Sections/Header.js';
import Footer from '../Sections/Footer.js';
import TempImage from '../Helpers/ImageExists.js'

import { Link } from "react-router-dom";

export default function UsersPage() {
    
    const [users, setUsers] = useState([]);
    
    useEffect(
        () => { fetchUsers().then(response => setUsers(response.items)) },
        []
    );
    
    const allUsers = users.map((user) => <SingleUser key={user.id} value={user} />);
    
    return (
        <div>
            <Header />
            <h2>Users</h2>
            {allUsers}
            <Footer />
        </div>
    )
}  

async function fetchUsers() {
    const response = await fetch('http://localhost:8080/api/users');
    return await response.json();
}

function SingleUser(props){

    let user = props.value; 

    return (
        <div className="user">   
            <Link to={"users/" + user.id}>
                <TempImage className="usersPage-bannerImage" src={user.bannerImage} />
                <TempImage className="usersPage-profileImage" src={user.profileImage} />
                <h1 className="usersPage-username">{user.username.toUpperCase()}</h1>
            </Link>
        </div>

    )
}