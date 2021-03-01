import React, { useState, useRef } from 'react';
import "./Auth.css";
import { fetchLogin, fetchMe } from "../api/index.js";
import { Redirect } from 'react-router-dom';
const BASE_URL = 'https://strangers-things.herokuapp.com/api/2010_UNF_RM_WEB_PT/users/login'

const Login = ({ user, setUser }) => {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState(null);

  const usernameOnChange = (event) => {
    setUsername(event.target.value);
  }
  const passwordOnChange = (event) => {
    setPassword(event.target.value);
  }
  const submitIsValid = () => {
    let result = { test: true };
    if (password.length < 4) {
      result.test = false;
      result.passwordLength = "Entered password is too short. Please enter at least 4 characters."
    }
    if (username.length < 4) {
      result.test = false;
      result.usernameLength = "Username must be atleast 4 characters"
    }
    return result;
  }
  const updateUserState = (object, token) => {
    console.log('updateUserState() running');
    console.log('object', object);
    console.log('token', token);
    let result = { ...object };
    result.token = token;
    setRefUser(result);
  }
  const myStateRef = useRef(user);
  const setRefUser = data => {
    myStateRef.current = data;
    setUser(data);  
  };

  const submitOnClick = (event) => {
    event.preventDefault();
    if (submitIsValid().test) {
      fetchLogin(username, password)
        .then((response) => {
          // {
          //   "success": true,
          //   "error": null,
          //   "data": {
          //     "token": "xyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTg5MDY2ZGQ0MzkxNjAwTc1NTNlMDUiLCJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE1ODYwMzgzODF9.CTj4owBl0PB-G6G4E_1l6DS6_cVc0iKcMzBIWFUYM1p",
          //     "message": "Thanks for logging in to our service."
          //   }
          // }

          if (response.success) {

            fetchMe(response.data.token).then(data => {
              updateUserState(data.data, response.data.token);
              return data;
            }).then(data => {
              localStorage.setItem('user', JSON.stringify(myStateRef.current));
            })
          } else {
            setErrors(
              <>
                <p>{response.error.message}</p>
              </>
            )
          }
        })
    } else {
      //render errors?
      setErrors(
        <>
          {submitIsValid().passwordLength ? <p> {submitIsValid().passwordLength}</p> : null}
          {submitIsValid().usernameLength ? <p> {submitIsValid().usernameLength}</p> : null}
        </>
      );
    }

    console.log('aferFetchMeInLogin user: ', user);
  }


  return (
    <main id="main-holder">
      {user ? <Redirect to='/posts' /> : null}
      <div className='App'></div>
      <h1 id="login-header">Login</h1>
      {/* <div id="login-error-msg-holder">
        <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
      </div> */}
      <form id="login-storage">
        <input onChange={usernameOnChange} type="text" name="username" id="username-field" className="login-storage-field" placeholder="Username"></input>
        <input onChange={passwordOnChange} type="password" name="password" id="password-field" className="login-storage-field" placeholder="Password"></input>
        <input onClick={submitOnClick} type="submit" value="Login" id="login-storgae-submit"></input>
        {errors}
      </form>
    </main>
  )
}
export default Login;