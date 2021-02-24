import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'

const profileHeader = (boolean) => {
    if (boolean) {
        return <> Profile </>
    }
    return null;
}

const authSection = (user, setUser) => {
    const onClickLogout = () => {
        setUser(null);
    }

    if (!user) {
        return <>
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
        </>
    }
    return <>
        <div id='username'>
            {user.username}
        </div>
        <Link to='/auth/logout'>
            <button onClick={onClickLogout}>
                Log Out
            </button>
        </Link>
    </>
}


const Header = ({ user, setUser }) => {

    // my user token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDJmMTMyYmZlOTRjOTAwMTczMDBkYWIiLCJ1c2VybmFtZSI6ImFsZWMwMTI0IiwiaWF0IjoxNjEzNjk3ODM1fQ.DOLRzZ3Cq3KmJuEy609GzewAO8LJHBbjBXUCCntbirU"
    //user alec0124
    //password oranges

    return <>
        <section id="header">
            <div id='auth'>
                {authSection(user, setUser)}
            </div>
            <img id="logo-image" src={logo} alt='Site Logo' />
            <div className='tabs'>
                <Link id="header-posts" to="/posts">
                    Posts
                </Link>
                <Link id="header-profile" to="/profile">
                    {profileHeader(user)}
                </Link>
            </div>
        </section>
    </>

}

export default Header;