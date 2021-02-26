import React from 'react';

const Inbox = ({messages, user}) => {
    
    const renderNotLoggedIn = () => {
        return <>
            <div>
                <h2>Please login to view your Inbox.</h2>
                <button>Login</button>
            </div>
        </>
    }
    if(!user) {
        return <>
            {renderNotLoggedIn()}
        </>
    }
    
    return <>
        {/* diplay Inbox*/}
    </>
}

export default Inbox;