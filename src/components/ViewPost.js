import React, {useEffect, useState, useRef} from 'react';
import { useParams } from 'react-router-dom';
import { fetchPosts } from '../api/index.js';
import SendMessage from './SendMessage.js';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT';

const ViewPost = ({ user }) => {

    const { id } = useParams();
    const [singlePost, setSinglePost] = useState(<>Fail to update</>);
    const [isNotMyPost, setIsNotMyPost] = useState(false);

    useEffect(() => {
    fetchPosts()
        .then(data => {
            return data.data.posts;
        })
        .then(data => {
            const singlePostObject = data.find(object => object._id === id);
            console.log(singlePostObject);
            if(!!user) {
            singlePostObject.author.username === user.username ? setIsNotMyPost(false) : setIsNotMyPost(true);
            }
                setSinglePost(<div>
                <h3 id="posts-title">{singlePostObject.title}</h3>
                <p id="posts-description">{singlePostObject.description}</p>
                <span id="posts-price"><b>Price:</b>   {singlePostObject.price}</span>
                <span id="posts-seller"><b>Seller:</b>   {singlePostObject.author.username}</span>
                <span className="posts-location"><b>Location:</b>   {singlePostObject.location}</span>
                {singlePostObject.willDeliver ? <span className="posts-willDeliver"><b>Will Deliver:</b>  Yes</span> : <span className="posts-willDeliver"><b>Will Deliver:</b>  No</span>}
            </div>);
        });
    }, [user]);

    const deletePost = async () => {
    
        await fetch(`${BASE_URL}/posts/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + user.token
    }
        }).then(response => response.json())
         .then(result => {
             console.log(result);
             alert('Post Has Been Deleted');

         })
         .catch(console.error);
        }


    return <section id="view-post">
        {singlePost}
        {isNotMyPost ? <SendMessage /> : <button onClick={deletePost}> Delete Post </button>}
    </section>
}

export default ViewPost;
