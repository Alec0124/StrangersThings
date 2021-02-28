import React, { useState } from 'react';
import {
    Link,
    Redirect
} from 'react-router-dom';



const Profile = ({user}) => {

    const renderNotLoggedIn = () => {
        return <>
            <div>
                <h2>Please login to view your profile.</h2>
                <Link to='/login'>
                <button>Login</button>
                </Link>
            </div>
        </>
    }

    // my user token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDJmMTMyYmZlOTRjOTAwMTczMDBkYWIiLCJ1c2VybmFtZSI6ImFsZWMwMTI0IiwiaWF0IjoxNjEzNjk3ODM1fQ.DOLRzZ3Cq3KmJuEy609GzewAO8LJHBbjBXUCCntbirU"
    //user alec0124
    //password oranges

    if(user === null) {
        return <>
            {renderNotLoggedIn()}
        </>
    }

    return <Redirect to='/profile/inbox'/>

}

export default Profile;