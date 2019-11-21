
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Post from '../Sections/Post.js';
import { fetchPosts} from '../Helpers/APIFetchers.js';

export default function AllUserPosts() {   
    
    let {userId} = useParams();
    
    const [postsSender, setSendPosts] = useState([]);  
    const [postsReciever, setRecPosts] = useState([]);  
   
    useEffect(
        () => {             
            setSendPosts([]);
            setRecPosts([]);

            fetchPosts('senderId', userId).then(response => setSendPosts(response.items));
            fetchPosts('receiverId', userId).then(response => setRecPosts(response.items));            
        },
        [userId]
    )   

    const output = postsSender.concat(postsReciever).map(
        (post) => <Post key={post.id} value={post} />
    );    

    return (
        <div> {output} </div>
    )
}