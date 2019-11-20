import React, { useState, useEffect } from 'react';

import Header from './Sections/Header.js';
import Footer from './Sections/Footer.js';

import Post from './Sections/Post.js'

export default function PostsPage() {

    return (
        <div>
            <Header />
            <h2>Posts</h2>
            <AllPosts />
            <Footer />
        </div>
    )
}

async function fetchPosts(pageNumber) {
    const response = await fetch('http://localhost:8080/api/posts?page=' + pageNumber);
    return await response.json();
}

function AllPosts() {

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
    )

    const allPosts = posts.map((post) => <Post key={post.id} value={post} />)

    allPosts.push(posts2.map((post) => <Post key={post.id} value={post} />))
    allPosts.push(posts3.map((post) => <Post key={post.id} value={post} />))

    return (
        <div>
            {allPosts}
        </div>
    )
}