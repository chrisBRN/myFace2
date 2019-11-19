import React from 'react';

import NavBar from './Sections/Header.js';
import Footer from './Sections/Footer.js';

export default function HomePage() {
    return (
        <div>
            <NavBar />
            <h2 className="Page-Title">Home</h2>
            <Footer />
        </div>
    )
}
