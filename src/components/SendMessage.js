import React, {useState} from 'react';
import {postMessage} from '../api/index.js';

const SendMessage = ({user, post_id}) => {
    const [content, setContent] = useState('');

    const contentOnChange = (event) => {
        setContent(event.target.value);
    }
    const sendMessageOnClick = (event) => {
        console.log('sendMessage USer in clicker',user)
        postMessage(user.token, post_id, content)
        //this is where async fetch function comes to push message to "messages" array within the post object in api
        // postMessage(post, content)
    }

    return <section id='send-message'>
        <h2>Enter Message</h2>
        <input type='textarea' onChange={contentOnChange} value={content} />
        <button onClick={sendMessageOnClick}>Send Message</button>
    </section>
}

export default SendMessage;