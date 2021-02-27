import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//Add Pagination
//Filter by Your Posts


const BASE_URL = 'https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT';


function filterPosts(postArr) {
    if (postArr.author.username = user.username) {
        return <>
                    {postArr.map((posts, index) => {
                return <div  id="posts" key={index}>
            <button><Link to={`/posts/${posts._id}`}>Send Message</Link></button>
            <h3 id="posts-title">{posts.title}</h3>
            <p id="posts-description">{posts.description}</p>
            <span id="posts-price"><b>Price:</b>   {posts.price}</span>
            <span id="posts-seller"><b>Seller:</b>   {posts.author.username}</span>
            <span className="posts-location"><b>Location:</b>   {posts.location}</span>
            </div>
            })}
               </> }
            return null;
    }


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
        if (postArr.author.username = user.username) {
            return <>
            {postArr.map((posts, index) => {
                return <div  id="posts" key={index}>
            <button >Delete Post</button>
            <h3 id="posts-title">{posts.title}</h3>
            <p id="posts-description">{posts.description}</p>
            <span id="posts-price"><b>Price:</b>   {posts.price}</span>
            <span id="posts-seller"><b>Seller:</b>   {posts.author.username}</span>
            <span className="posts-location"><b>Location:</b>   {posts.location}</span>
            </div>
            })}
               </> }
            return <>
             {postArr.map((posts, index) => {
                 return <div  id="posts" key={index}>
             <button><Link to={`/posts/${posts._id}`}>Send Message</Link></button>
             <h3 id="posts-title">{posts.title}</h3>
             <p id="posts-description">{posts.description}</p>
             <span id="posts-price"><b>Price:</b>   {posts.price}</span>
             <span id="posts-seller"><b>Seller:</b>   {posts.author.username}</span>
             <span className="posts-location"><b>Location:</b>   {posts.location}</span>
             </div>
             })}
                </> }

    console.log(postArr);

    return <main>
        <div id="posts-main">
            <header>
                <h1>Things for Sale!</h1>
                <button onClick={filterPosts}>Your Posts</button>
                <button> <Link to="/posts/submit">New Post</Link></button>
            </header>
            <section>
                {renderPosts(postArr)}
            </section>
        </div>
    </main>

}

export default Posts;