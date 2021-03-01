import React, {useEffect, useState, useRef} from 'react';
import { useParams } from 'react-router-dom';
import { fetchPosts } from '../api/index.js';
import SendMessage from './SendMessage.js';

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
                <button> Delete Post </button>
            </div>);
        });
    }, [user]);


    return <section id="view-post">
        {singlePost}
        {isNotMyPost ? <SendMessage user={user} post_id={id} /> : null}
    </section>
}

export default ViewPost;
