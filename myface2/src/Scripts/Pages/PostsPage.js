import React, { useState, useEffect } from 'react';

import Header from '../Sections/Header.js';
import Footer from '../Sections/Footer.js';

import { fetchSinglePageOfPosts } from '../Helpers/APIFetchers.js';

import Post from '../Sections/Post.js'

export default function PostsPage() {

    return (
        <div>
            <Header />
            <AllPosts />
            <Footer />
        </div>
    )
}

function AllPosts() {

    const [posts, setPosts] = useState([]);  

    useEffect(
        () => { fetchSinglePageOfPosts(1).then(response => setPosts(response.items)) },
        []
    );

    const allPosts = posts.map((post) => <Post key={post.id} value={post} />);

    return (
        <div>
            {allPosts}
        </div>
    )
}