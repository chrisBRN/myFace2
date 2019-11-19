import React from 'react';

import NavBar from './Sections/Header.js';
import Footer from './Sections/Footer.js';

export default function PostsPage() {   
    return (
      <div>
        <NavBar/> 
        {/* <GetPosts/> */}
        <h2>Posts</h2>
        
        <Footer/>
      </div>
    )  
  }



  

async function FetchJson(url){  
  const response = await fetch(url);   
  const json = await response.json();  
  return JSON.stringify(json);
}

function GetPosts(){
  
  let data = FetchJson("http://localhost:8080/api/posts"); 

  data.then(jsonString => console.log(jsonString))  

return <div></div>
}