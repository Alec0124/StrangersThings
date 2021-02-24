import React from 'react';


const BASE_URL = 'https://strangers-things.herokuapp.com/api/2004-UNF-HY-WEB-PT';


async function fetchPosts() {
  try { 
     const response = await fetch(`${BASE_URL}/posts`)
    const data = await response.json();
  return console.log(data);
} catch (error) {
  throw error;
}
}
fetchPosts();

const Posts = (props) => {
const title = props.title;
const description = props.description;
const price = props.price;
const seller = props.seller;
const location = props.location;

console.log(props.title);

    return <main>
        <div>
            <header>
                <h1>Posts</h1>
                {/* Button to filter posts to just display logged in user's posts */}
                <button>Your Posts</button> 
            </header>
            <section>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="title">Price</span>
                <span className="content">{ price}</span>
                <span className="title">Seller</span>
                <span className="content">{seller}</span>
                <span className="title">Location</span>
                <span className="content">{location}</span>
                <button>Send Message</button>
            </section>
        </div>
    </main>

}

export default Posts;