import React, { useState, useEffect } from 'react';

import Header from './Sections/Header.js';
import Footer from './Sections/Footer.js';
import User from './Sections/User.js'


export default function UsersPage() {
    return (
        <div>
            <Header />
            <h2>Users</h2>
            <AllUsers />
            <Footer />
        </div>
    )
}  

async function fetchUsers() {
    const response = await fetch('http://localhost:8080/api/users');
    return await response.json();
}

function AllUsers() {

    const [users, setUsers] = useState([]);

    useEffect(
        () => { fetchUsers().then(response => setUsers(response.items)) },
        []
    );

    const allUsers = users.map((user) =>
        <User key={user.id}
            value={user} />
    );

    return (
        <div>
            {allUsers}
        </div>
    );
}