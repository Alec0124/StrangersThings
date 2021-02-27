import React, { useEffect } from 'react';
// import React, { useState } from 'react';
// import { getUsers } from '../api'
import "./Auth.css";
const BASE_URL = 'https://strangers-things.herokuapp.com/api/2010_UNF_RM_WEB_PT/users/login'

const Login = () => {
    // const [userList, setUserList] = useState([]);
    
let username = document.getElementById('username');
let password = document.getElementById('password');

function store() {
  localStorage.setItem('username', username.value);
  localStorage.setItem('password', password.value);
}

function check() {

  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  const username = document.getElementById('username');
  const password = document.getElementById('password');

  if(username.value !== storedUsername || password.value !== storedPassword) {
      alert('ERROR');
  }else {
      alert('You are loged in.');
  }
  
}




function Login() {
    useEffect(() => {
        async function registerUser() {
            const result = await fetch(
                'https://strangers-things.herokuapp.com/api/2010_UNF_RM_WEB_PT/users/login', {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      user: {
                        username,
                        password,
                      }
                    })
                  }).then(response => response.json())
                    .then(result => {
                      console.log(result);
                    })
                    .catch(console.error);
                }
    })

    // useEffect(() => {
    //   getUsers()
    //     .then(users => {
    //     //   setUserList(users)
    //     // })
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    // }, []);
  

  return (
  <main id="main-holder">
  <div className='App'></div>
    <h1 id="login-header">Login</h1>
    <div id="login-error-msg-holder">
      <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
    </div>
    <form id="login-storage">
      <input type="text" name="username" id="username-field" class="login-storage-field" placeholder="Username"></input>
      <input type="password" name="password" id="password-field" class="login-storage-field" placeholder="Password"></input>
      <input type="submit" value="Login" id="login-storgae-submit"></input>
    </form>
  </main>
)
}
}
export default Login;