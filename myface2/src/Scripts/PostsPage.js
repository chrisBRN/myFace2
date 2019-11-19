import React, {useState, useEffect} from 'react';

import NavBar from './Sections/Header.js';
import Footer from './Sections/Footer.js';

import Post from './Sections/Post.js'

export default function PostsPage() {    
  
  return (
    <div>
      <NavBar/> 
      <h2>Posts</h2>     
      <AllPosts/>    
      <Footer/>
    </div>
  )  
}

async function fetchPosts() {
  const response = await fetch('http://localhost:8080/api/posts');
  return await response.json();
}

function AllPosts(){

  const [posts, setPosts] = useState([]);

  useEffect(
    () => {fetchPosts().then(response => setPosts(response.items))}, 
    []
  )    

  const allPosts = posts.map((post) => 
    <Post key={post.id}
          value={post}/>  
  )

  return (
    <div>      
      {allPosts}
    </div> 
  )
}