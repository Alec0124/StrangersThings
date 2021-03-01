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
            <Link to="/login">
                <button id='login-button'>
                    Login
                </button>
            </Link>
            <Link to="/register">
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
        <Link to='/logout'>
            <button onClick={onClickLogout}>
                Log Out
            </button>
        </Link>
    </>
}


const Header = ({ user, setUser }) => {

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
                    Profile
                </Link>
            </div>
        </section>
    </>

}

export default Header;