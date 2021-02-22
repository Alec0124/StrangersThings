import React from 'react';
import {Link} from 'react-router-dom';

const profileHeader = () => {
    return <>
    Profile
    </>
}


const Header = () => {




    // my user token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDJmMTMyYmZlOTRjOTAwMTczMDBkYWIiLCJ1c2VybmFtZSI6ImFsZWMwMTI0IiwiaWF0IjoxNjEzNjk3ODM1fQ.DOLRzZ3Cq3KmJuEy609GzewAO8LJHBbjBXUCCntbirU"
    //user alec0124
    //password oranges

    return <>
        <section id="header">
            <img id="logo-image" src='./logo.png' alt='Site Logo' />

                <Link id="header-posts" to="/posts">
                        Posts
                </Link>
                <Link id="header-profile" to="/profile">
                    {profileHeader()}
                </Link>
                <div id='auth'>
                    <Link to="/auth/login">
                        <button id='login-button'>
                            Login
                        </button>
                    </Link>
                    <Link to="/auth/register">
                        <button id='register-button'>
                            Register
                        </button>
                    </Link>
                </div>
        </section>
    </>

}

export default Header;