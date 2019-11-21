import React from 'react';

import Header from './Sections/Header.js';
import Footer from './Sections/Footer.js';
import User from './Sections/User.js'
import AllUserPosts from './Sections/AllUserPosts.js';
import MessageForm from './Sections/MessageForm.js';

export default function UserPage() {
    return (
        <div>
            <Header />            
            <User />
            <MessageForm />
            <AllUserPosts />            
            <Footer />
        </div>
    )
} 