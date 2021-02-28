import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT';


const Posts = ({user}) => {
    const [postArr, setPostArr] = useState(null);
    const [isMyPosts, setIsMyPosts] = useState(false);

    let { id } = useParams();

 function onClickYourPosts() {
     setIsMyPosts(true);
 }

 const createPostButton = (post) => {
     if(user && user.username === post.author.username) {
        return <button onClick={deletePost}>Delete Post</button>
     } else {
         if(user) {
        return <button><Link to={`/posts/${post._id}`}>Send Message</Link></button>
         } else {
             return <button><Link to={`/login`}>Send Message</Link></button>
         }
     }
 }
 const createPostsHeaderButtons = () => {
     if(user) {
     return <>
    <button onClick={onClickYourPosts}>Your Posts</button>
    <button> <Link to="/posts/submit">New Post</Link></button>
    </>
     } else {
         return null;
     }
 }


const deletePost = async () => {
    
    const resp = await fetch(`${BASE_URL}/posts/${id}`,
    {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + user.token
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
console.log(postArr);
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

export default Posts;