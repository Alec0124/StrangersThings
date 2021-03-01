import React, {useEffect, useState, useRef} from 'react';
import { useParams } from 'react-router-dom';
import { fetchPosts, deletePost } from '../api/index.js';
import SendMessage from './SendMessage.js';

const ViewPost = ({ user }) => {

    const { id } = useParams();
    const [singlePost, setSinglePost] = useState(<>Fail to update</>);
    const [isNotMyPost, setIsNotMyPost] = useState(false);

    useEffect(() => {
    fetchPosts()
        .then(data => {
            console.log('posts data: ', data.data.posts);
            return data.data.posts;
        })
        .then(data => {
            const singlePostObject = data.find(object => object._id === id);
            console.log('single post: ', singlePostObject);
            singlePostObject.author.username === user.username ? setIsNotMyPost(false) : setIsNotMyPost(true);
                setSinglePost(<div>
                <h3 id="posts-title">{singlePostObject.title}</h3>
                <p id="posts-description">{singlePostObject.description}</p>
                <span id="posts-price"><b>Price:</b>   {singlePostObject.price}</span>
                <span id="posts-seller"><b>Seller:</b>   {singlePostObject.author.username}</span>
                <span className="posts-location"><b>Location:</b>   {singlePostObject.location}</span>
                {singlePostObject.willDeliver ? <span className="posts-willDeliver"><b>Will Deliver:</b>  Yes</span> : <span className="posts-willDeliver"><b>Will Deliver:</b>  No</span>}
                <button onClick={deletePost}> Delete Post </button>
            </div>);
        });
    }, []);


    return <section id="view-post">
        {singlePost}
        {isNotMyPost ? <SendMessage /> : null}
    </section>
}

export default ViewPost;
