import React from 'react';

const Posts = (props) => {
const posts = props.placeholder.posts;
const title = props.placeholder.posts.title;
const description = props.placeholder.posts.description;
const price = props.placeholder.price;
const seller = props.placeholder.seller;
const location = props.placeholder.location;


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
                <span className="content">{price}</span>
                <span className="title">Seller</span>
                <span className="content">{seller}</span>
                <span className="title">Location</span>
                <span className="content">{location}</span>
                <button>Send Message</button>
            </section>
        </div>
        <div>
            <aside>
                <header>
                    <h1>Submit Post</h1>
                </header>
                <form>
                    <label for="post-title">Post Title</label>
                    <input
                        id="post-title"
                        type="text"
                        placeholder="enter title..."
                    />
                    <label for="post-description">Post Description</label>
                    <input
                        id="post-description"
                        type="text"
                        placeholder="enter description..."
                    />
                    <label for="price">Price</label>
                    <input
                        id="price"
                        type="text"
                        placeholder="enter price..."
                    />
                    <label for="post-title">Details</label>
                    <input
                        id="details"
                        type="text"
                        placeholder="enter details..."
                    />
                </form>
                <button>Submit</button>
            </aside>
        </div>
    </main>

}

export default Posts;