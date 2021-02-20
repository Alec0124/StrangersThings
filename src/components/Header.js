import React from 'react';

const Header = () => {




    // my user token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDJmMTMyYmZlOTRjOTAwMTczMDBkYWIiLCJ1c2VybmFtZSI6ImFsZWMwMTI0IiwiaWF0IjoxNjEzNjk3ODM1fQ.DOLRzZ3Cq3KmJuEy609GzewAO8LJHBbjBXUCCntbirU"
    //user alec0124
    //password oranges

    return <>
        <section id="header">
            <img id="logo-image" src='./logo.png' alt='Site Logo' />
            <div id='auth'>
                <button id='login-button'>
                    Login
                </button>
                <button id='register-button'>
                    Register
                </button>
            </div>
        </section>
    </>

}

export default Header;