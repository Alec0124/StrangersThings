import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//Add Pagination
//Fix Send Message Button
//Filter by Your Posts

import {
    SendMessage
  } from './index.js';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT';

const Posts = () => {
    const [postArr, setPostArr] = useState(null);



    async function fetchPosts() {
        try {
            const response = await fetch(`${BASE_URL}/posts`)
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }

    }

    useEffect(() => {
    fetchPosts().then(data => {
        setPostArr(data.data.posts);
    })
}, []);

    function renderPosts(postArr) {
        if (!! postArr) {
            return <>
            {postArr.map((posts, index) => {
                return <div  id="posts" key={index}>
            <button><Link to={`/posts/${posts._id}`}>Send Message</Link></button>
            <h3 id="posts-title">{posts.title}</h3>
            <p id="posts-description">{posts.description}</p>
            <span id="posts-price"><b>Price:</b>   {posts.price}</span>
            <span id="posts-seller"><b>Seller:</b>   {posts.seller}</span>
            <span className="posts-location"><b>Location:</b>   {posts.location}</span>
            </div>
            })}
               </> }
            return null;

    }
    console.log(postArr);
    return <main>
        <div id="posts-main">
            <header>
                <h1>Things for Sale!</h1>
                <button>Your Posts</button>
                <button> <Link to="/posts/submit">New Post</Link></button>
            </header>
            <section>
                {renderPosts(postArr)}
            </section>
        </div>
    </main>

}

export default Posts;