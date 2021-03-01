import { title } from 'process';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT';


const Posts = ({ user }) => {
    const [postArr, setPostArr] = useState(null);
    const [isMyPosts, setIsMyPosts] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const [filteredPosts, setFilteredPosts] = useState([]);
    
    const postsToDisplay = searchTerm.length ? filteredPosts : postArr;

    function onClickYourPosts() {
        setIsMyPosts(true);
    }

    function refreshPage() {
        window.location.reload(false);
    }

    const searchTermOnChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const createPostButton = (post) => {
        if (user && user.username === post.author.username) {
            return <button><Link to={`/posts/${post._id}`}>View Post</Link></button>
        } else {
            if (user) {
                return <button><Link to={`/posts/${post._id}`}>Send Message</Link></button>
            } else {
                return <button><Link to={`/login`}>Send Message</Link></button>
            }
        }
    }
    const createPostsHeaderButtons = () => {
        if (user) {
            return <>
                <button onClick={onClickYourPosts}>View Your Posts</button>
                <button onClick={refreshPage}>View All Posts</button>
                <button> <Link to="/posts/submit">New Post</Link></button>
            </>
        } else {
            return null;
        }
    }

    function postMatches(post, text) {
        // return true if any of the fields you want to check against include the text
        // strings have an .includes() method 
        if(post.title && post.title.includes(text)) {return true}
        if(post.description && post.description.includes(text)) {return true}
        if(post.price && post.price.includes(text)) {return true}
        if(post.location && post.location.includes(text)) {return true}
        if(post.seller && post.seller.includes(text)) {return true}
        return false;
    }

    // then, in our jsx below... map over postsToDisplay instead of posts



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
            return data;
        })
        .then(data => {
            setFilteredPosts(data.data.posts.filter(post => postMatches(post, searchTerm)));
        })
    }, [searchTerm]);

    function renderPosts(postArr) {
        if (!!postArr) {
            return <>
                {postArr.map((posts, index) => {
                    if (user && user.username !== posts.author.username && isMyPosts) {
                        return null;
                    }
                    return <div id="posts" key={index}>
                        {createPostButton(posts)}
                        <h3 id="posts-title">{posts.title}</h3>
                        <p id="posts-description">{posts.description}</p>
                        <span id="posts-price"><b>Price:</b>   {posts.price}</span>
                        <span id="posts-seller"><b>Seller:</b>   {posts.author.username}</span>
                        <span className="posts-location"><b>Location:</b>   {posts.location}</span>
                        {posts.willDeliver ? <span className="posts-willDeliver"><b>Will Deliver:</b>  Yes</span> : <span className="posts-willDeliver"><b>Will Deliver:</b>  No</span>}
                    </div>
                })}
            </>
        }
        return null;

    }

    return <main>
        <div id="posts-main">
            <header>
                <h1>Things for Sale!</h1>
                {createPostsHeaderButtons()}
                    <fieldset>
                        <label>Search Posts:  </label>
                        <input
                            id="keywords"
                            type="text"
                            onChange={searchTermOnChange}
                        />
                    </fieldset>
            </header>
            <section>
                {renderPosts(postsToDisplay)}
            </section>
        </div>
    </main>

}

export default Posts;