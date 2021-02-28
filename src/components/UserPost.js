import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT';


const UserPost = ({user}) => {
    const [postArr, setPostArr] = useState(null);

    let { id } = useParams();

console.log(id);


const deletePost = async () => {
    
    const resp = await fetch(`${BASE_URL}/posts/${post._id}`,
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


    async function fetchPost() {
        try {
            const response = await fetch(`${BASE_URL}/posts`);
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }

    useEffect(() => {
    fetchPost().then(data => {
        setPostArr(data.data.posts);
    })
}, []);

    function renderPosts(postArr) {
        if (!! postArr) {
            return <>
            {postArr.map((posts, index) => {
                return <div  id="posts" key={index}>
                <button onClick={deletePost}>Delete Post</button>
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
            <section>
                {renderPosts(postArr)}
            </section>
        </div>
    </main>

}

export default UserPost;