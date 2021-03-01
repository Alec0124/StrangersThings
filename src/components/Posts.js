import { title } from 'process';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT';


const Posts = ({user}) => {
    const [postArr, setPostArr] = useState(null);
    const [isMyPosts, setIsMyPosts] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


 function onClickYourPosts() {
     setIsMyPosts(true);
 }

  function refreshPage() {
      window.location.reload(false);
    }

 const createPostButton = (post) => {
     if(user && user.username === post.author.username) {
        return  <button><Link to={`/posts/${post._id}`}>View Post</Link></button>
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
    <button onClick={onClickYourPosts}>View Your Posts</button>
    <button onClick={refreshPage}>View All Posts</button>
    <button> <Link to="/posts/submit">New Post</Link></button>
    <form >
    <fieldset>
      <label>Search Posts:  </label>
      <input
        id="keywords"
        type="text"
        />
    </fieldset>
    <button>Search</button>
    </form>
    </>
     } else {
         return null;
     }
 }
 
 function postMatches(post, text) {
   // return true if any of the fields you want to check against include the text
   // strings have an .includes() method 
        post.title.includes(text) ? true : null;
        post.description.includes(text) ? true : null;
        post.price.includes(text) ? true : null;
        post.location.includes(text) ? true : null;
        post.seller.includes(text) ? true : null;
    return false;
 }
 
 const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
 const postsToDisplay = searchTerm.length ? filteredPosts : posts;
 
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
    })
}, []);

    function renderPosts(postArr) {
        console.log(postArr);
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