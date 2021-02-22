import React, { useState } from 'react';
import {
    Link
} from 'react-router-dom';

const messageTimeStamp = (message) => {
    if (!!message.date) {
        return message.date.toDateString() + ' ' + message.date.toUTCString();
    }
    return null;
}

const Profile = (/* messages, user */) => {

    const [isInboxSelected, setIsInboxSelected] = useState(true);

    const sampleResp = {
        "posts": [
            {
                "location": "[On Request]",
                "willDeliver": false,
                "messages": [
                    {
                        "_id": "5e8d1f2539e7a70017a7c968",
                        "fromUser": {
                            "_id": "5e8d1f2539e7a70017a7c962",
                            "username": "jane1234"
                        },
                        "content": "I am very much in the market for a fine violin."
                    }
                ],
                "active": true,
                "_id": "5e8d1f2539e7a70017a7c964",
                "author": "5e8d1f2539e7a70017a7c961",
                "title": "Practically new Stradivarius",
                "description": "I've really only used this three or four times.  I thought it would be a good purchase, shows what I know.",
                "price": "$14.3 million",
                "createdAt": "2020-04-08T00:47:33.794Z",
                "updatedAt": "2020-04-08T00:47:33.865Z",
                "__v": 0
            },
            {
                "location": "Bronx, NY",
                "willDeliver": false,
                "messages": [],
                "active": true,
                "_id": "5e8d1f8647b6ce0017600593",
                "title": "Schwinn Bicycle",
                "price": "3.88",
                "description": "This is a 19 speed bicycle, barely used.",
                "author": "5e8d1f2539e7a70017a7c961",
                "createdAt": "2020-04-08T00:49:10.248Z",
                "updatedAt": "2020-04-08T00:49:10.248Z",
                "__v": 0
            }
        ],
        "messages": [
            {
                "_id": "5e8d1f2539e7a70017a7c968",
                "post": {
                    "_id": "5e8d1f2539e7a70017a7c964",
                    "title": "Practically new Stradivarius"
                },
                "fromUser": {
                    "_id": "5e8d1f2539e7a70017a7c962",
                    "username": "jane1234"
                },
                "content": "I am very much in the market for a fine violin."
            },
            {
                "_id": "5e8d1f2539e7a70017a7c969",
                "post": {
                    "_id": "5e8d1f2539e7a70017a7c965",
                    "title": "Golden Retriever puppies"
                },
                "fromUser": {
                    "_id": "5e8d1f2539e7a70017a7c961",
                    "username": "joe1234"
                },
                "content": "OMG Puppies... I'll take them all!"
            },
            {
                "_id": "5e8d1fd747b6ce0017600594",
                "content": "I really love this item.  Can I have it?",
                "post": {
                    "_id": "5e8d1f2539e7a70017a7c965",
                    "title": "Golden Retriever puppies"
                },
                "fromUser": {
                    "_id": "5e8d1f2539e7a70017a7c961",
                    "username": "joe1234"
                }
            }
        ],
        "_id": "5e8d1f2539e7a70017a7c961",
        "username": "joe1234",
        "__v": 0
    };

    const messages = sampleResp.messages;
    console.log(messages);
    const user = {
        '_id': "5e8d1f2539e7a70017a7c961",
        'username': 'joe1234'
    };
    if (isInboxSelected) {

    }

    // my user token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDJmMTMyYmZlOTRjOTAwMTczMDBkYWIiLCJ1c2VybmFtZSI6ImFsZWMwMTI0IiwiaWF0IjoxNjEzNjk3ODM1fQ.DOLRzZ3Cq3KmJuEy609GzewAO8LJHBbjBXUCCntbirU"
    //user alec0124
    //password oranges

    return <>
        <section id='main'>
            <section id='main-header'>
                <button
                    className={isInboxSelected ? 'active' : null}
                    id='inbox-button'
                    onClick={() => {
                        setIsInboxSelected(true);
                    }}
                >
                    Inbox
                </button>
                <button
                    className={!isInboxSelected ? 'active' : null}
                    id='outbox-button'
                    onClick={() => {
                        setIsInboxSelected(false);
                    }}
                >
                    Outbox
                </button>

            </section>
            <section id="main-body">

                {
                    messages.map(message => {
                        if ((isInboxSelected && message.fromUser._id !== user._id) || (!isInboxSelected && message.fromUser._id === user._id)) {

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
                                            {isInboxSelected ? 'View Post' : 'Send Message'}
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

export default Profile;