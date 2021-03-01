import React from 'react';
import {Link} from 'react-router-dom';
import {postMessage} from '../api/index.js';

const Inbox = ({user}) => {

    const renderNotLoggedIn = () => {
        return <>
            <div>
                <h2>Please login to view your Inbox.</h2>
                <Link to='/login'>
                <button>Login</button>
                </Link>
            </div>
        </>
    }

    if(!user) {
        return <>
            {renderNotLoggedIn()}
        </>
    }
    console.log('user: ', user)

    const renderOutbox = (messages) => {
        console.log('renderOutbox user: ', user);
        if(!messages) {return <h1>You have not received any messages.</h1>}
        return <>
        {
            messages.map(message => {

                if (message.fromUser._id !== user._id) {

                    return <div key={message._id} className='message'>
                        <div className='message-header'>
                            <span className='sender'>
                                Sender: {message.fromUser.username}
                            </span>
                            <span className='timestamp'>

                            </span>
                        </div>
                        <div className='message-body'>
                            {message.content}
                        </div>
                        <span>
                            <Link to={"../Posts/" + message.post._id}>
                                <button>
                                    Send Message
                                </button>
                            </Link>
                            <span>{message.post.title}</span>
                        </span>
                    </div>
                }
                else {
                    return null;
                }
            })
        }
        </>
    }

    if(!user.messages) {
        return null;
    }

    return <>
        <section id='main'>
            <section id='main-header'>
                
                <button id='inbox-button' className='active'>
                    
                    Inbox
                </button>
                <Link to='/profile/outbox'>
                <button
                    id='outbox-button'
                >
                    Outbox
                </button>
                </Link>
            </section>
            <section id="main-body">
                {renderOutbox(user.messages)}
            </section>
        </section>
    </>
}

export default Inbox;