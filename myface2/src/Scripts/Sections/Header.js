import React from 'react';

import logo from '../../Resources/newlogo-non-transparent.png'


import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="Nav-bar" id="Header-nav-bar">
            <nav>
                <Link to="/home"><img className="logo" src={logo} alt="logo" /></Link>
                <Link to="/posts">Posts</Link>
                <Link to="/users">Users</Link>
            </nav>
        </div>
    )
}
