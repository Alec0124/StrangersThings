import React from 'react';
import {Link} from 'react-router-dom';

const Outbox = ({messages, user}) => {

    const renderNotLoggedIn = () => {
        return <>
            <div>
                <h2>Please login to view your Outbox.</h2>
                <button>Login</button>
            </div>
        </>
    }
    const messageTimeStamp = (message) => {
        if (!!message.date) {
            return message.date.toDateString() + ' ' + message.date.toUTCString();
        }
        return null;
    }

    if(!user) {
        return <>
            {renderNotLoggedIn()}
        </>
    }
    


    return <>
        <section id='main'>
            <section id='main-header'>
                <button
                    id='inbox-button'
                    onClick={() => {
                        //redirect to Inbox
                    }}
                >
                    Inbox
                </button>
                <button
                    className='active'
                    id='outbox-button'
                >
                    Outbox
                </button>

            </section>
            <section id="main-body">

                {
                    messages.map(message => {
                        if (message.fromUser._id === user._id) {

                            return <div key={message._id} className='message'>
                                <div className='message-header'>
                                    <span className='sender'>
                                        Sender: {message.fromUser.username}
                                    </span>
                                    <span className='timestamp'>
                                        {messageTimeStamp(message)}
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
            </section>
        </section>
    </>
}

export default Outbox;