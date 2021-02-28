import React from 'react';
import {Link} from 'react-router-dom';

const Outbox = ({user}) => {

    const renderNotLoggedIn = () => {
        return <>
            <div>
                <h2>Please login to view your Outbox.</h2>
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
        if(!messages) {return <h1>You have not sent any messages.</h1>}
        return <>
        {
            messages.map(message => {

                if (message.fromUser._id === user._id) {

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
                <Link to='/profile/inbox'>
                <button id='inbox-button'>
                    Inbox
                </button>
                </Link>
                <button
                    className='active'
                    id='outbox-button'
                >
                    Outbox
                </button>

            </section>
            <section id="main-body">
                {renderOutbox(user.messages)}
            </section>
        </section>
    </>
}

export default Outbox;