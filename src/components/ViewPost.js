import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT';

const ViewPost = ({user}) => {
    
    let { id } = useParams();
    console.log(id);

    function renderPosts(postArr) {
        if (!! postArr) {
            return <>
            {postArr.map((posts, index) => {
                if (user && user.username !== posts.author.username && isMyPosts) {
                    return null;
                }
                return <div  id="posts" key={index}>
            {createPostButton(posts)}
            <h3 id="posts-title">{posts.title}</h3>
            <p id="posts-description">{posts.description}</p>
            <span id="posts-price"><b>Price:</b>   {posts.price}</span>
            <span id="posts-seller"><b>Seller:</b>   {posts.author.username}</span>
            <span className="posts-location"><b>Location:</b>   {posts.location}</span>
            {posts.willDeliver ? <span className="posts-willDeliver"><b>Will Deliver:</b>  Yes</span> : <span className="posts-willDeliver"><b>Will Deliver:</b>  No</span>}
            </div>
            })}
               </> }
            return null;
            
    }

    return <main>
        <div id="posts-main">
            <header>
                <h1>Things for Sale!</h1>
                {createPostsHeaderButtons()}
            </header>
            <section>
                {renderPosts(postArr)}
            </section>
        </div>
    </main>

}

export default ViewPost;

}