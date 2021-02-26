import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const BASE_URL = 'https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT';

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
        if (!! postArr) {
            return <>
            {postArr.map((posts, index) => {
                return <div key={index}>
            <h3>{posts.title}</h3>
            <p>{posts.description}</p>
            <span className="title">Price</span>
            <span className="title">{posts.price}</span>
            <span className="title">Seller</span>
            <span className="content">{posts.seller}</span>
            <span className="title">Location</span>
            <span className="content">{posts.location}</span>
            <button>Send Message</button>
            </div>
            })}
               </> }
            return null;

    }
    console.log(postArr);
    return <main>
        <div>
            <header>
                <h1>Posts</h1>
                <button>Your Posts</button>
                <button> <Link to="/submit">Submit</Link> </button>
            </header>
            <section>
                {renderPosts(postArr)}
            </section>
        </div>
    </main>

}

export default Posts;