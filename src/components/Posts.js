import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//Add Pagination
//Filter by Your Posts


const BASE_URL = 'https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT';


const Posts = ({user}) => {
    const [postArr, setPostArr] = useState(null);
    const [isMyPosts, setIsMyPosts] = useState(false);

 function onClickYourPosts() {
     setIsMyPosts(true);
 }


const deletePost = async () => {
    const resp = await fetch(`${BASE_URL}/posts`,
    {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer" + user.token
}
    }).then(response => response.json())
     .then(result => {
         console.log(result);
     })
     .catch(console.error);
    }


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
                if (!posts.isAuthor && isMyPosts) {
                    return null;
                }
                return <div  id="posts" key={index}>
            <button><Link to={`/posts/${posts._id}`}>Send Message</Link></button>
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
                <button onClick={onClickYourPosts}>Your Posts</button>
                <button> <Link to="/posts/submit">New Post</Link></button>
            </header>
            <section>
                {renderPosts(postArr)}
            </section>
        </div>
    </main>

}

export default Posts;