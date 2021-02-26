import React, { useEffect, useState } from 'react';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT';





const Submit = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);



    const submitPost = async (title, description, price, location, willDeliver) => {
        const resp = await fetch(`${BASE_URL}/posts`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer" + user.token
                },
                body: JSON.stringify({
                    post: {
                        title,
                        description,
                        price,
                        location,
                        willDeliver
                    }
                })
            }
        );
        return await resp.json();
    };


    return <div>
        <header>
            <h1>Submit Post</h1>
        </header>
        <form id="submit" onSubmit={async (event) => {
            event.preventDefault();
            try {
                await submitPost( title, description, price, location, willDeliver );
            } catch (error) {
                console.error(error);
            }

        }}>
            <label>Post Title</label>
            <input
                id="post-title"
                type="text"
                placeholder="enter title..."
                value={title}
                onChange={function (e) {
                    setTitle(e.target.value)
                }}
            />
            <label>Post Description</label>
            <input
                id="post-description"
                type="text"
                placeholder="enter description..."
                value={description}
                onChange={function (e) {
                    setDescription(e.target.value)
                }}
            />
            <label>Price</label>
            <input
                id="price"
                type="text"
                placeholder="enter price..."
                value={price}
                onChange={function (e) {
                    setPrice(e.target.value)
                }}
            />
            <label>Location</label>
            <input
                id="location"
                type="text"
                placeholder="enter location..."
                value={location}
                onChange={function (e) {
                    setLocation(e.target.value)
                }}
            />
            <label>Will Deliver</label>
            <input
                id="willDeliver"
                type="checkbox"
                value={willDeliver}
                onChange={function (e) {
                    setWillDeliver(true)
                }}
            />
            <button>Submit</button>
        </form>
    </div>
}

export default Submit;