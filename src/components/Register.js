import React, { useState } from 'react';
import "./Auth.css";
import {fetchMe, fetchRegister} from "../api/index.js";
import { Redirect } from 'react-router-dom';
// import { resourceLimits } from 'worker_threads';
const BASE_URL = 'https://strangers-things.herokuapp.com/api/2010_UNF_RM_WEB_PT/users/login'

const Register = ({setUser, user}) => {
    
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState(null);
    // const [userList, setUserList] = useState([]);
    
// let username = document.getElementById('username');
// let password = document.getElementById('password');



    const handleFormSubmit = (event) => {
        event.preventDefault();
    // const { username, password } = this.state;
    if(submitIsValid().test) {
        console.log('validation is running')
        fetchRegister(username, password)
        .then(data => {
            console.log (data)
            if(data.success) {
                fetchMe(data.data.token).then(user => {
                  setUser(user);
                  setUser({token: data.data.token});
                });
                localStorage.setItem('user', user);
                // setUser({
                //     username: username,
                //     token: data.data.token,
                // })
                // localStorage.setItem('username', username);
                // localStorage.setItem('token', data.data.token);
            }
            else {
                setErrors(
                    <>
                    {data.error.message}
                    </>
                )

            }
        })
    }
    else {
        console.log('validation is not running')
            setErrors(
      <>
        {submitIsValid().passwordLength ? <p> {submitIsValid().passwordLength}</p> : null}
        {submitIsValid().usernameLength ? <p> {submitIsValid().usernameLength}</p> : null}
        {submitIsValid().passwordMatch ? <p> {submitIsValid().passwordMatch}</p> : null}
      </>
            )
            }

}

// function check() {

//   const storedUsername = localStorage.getItem('username');
//   const storedPassword = localStorage.getItem('password');

//   const username = document.getElementById('username');
//   const password = document.getElementById('password');

//   if(username.value !== storedUsername || password.value !== storedPassword) {
//       alert('ERROR');
//   }else {
//       alert('You are loged in.');
//   }
  
// }



// function Login() {
//     useEffect(() => {
//         async function registerUser() {
//             const result = await fetch(
//                 'https://strangers-things.herokuapp.com/api/2010_UNF_RM_WEB_PT/users/login', {
//                     method: "POST",
//                     headers: {
//                       'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                       user: {
//                         username,
//                         password,
//                       }
//                     })
//                   }).then(response => response.json())
//                     .then(result => {
//                       console.log(result);
//                     })
//                     .catch(console.error);
//                 }
//     })

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
  
const usernameOnChange = (event) => {
  setUsername(event.target.value);
}
const passwordOnChange = (event) => {
  setPassword(event.target.value);
}
const confirmPasswordOnChange = (event) => {
  setConfirmPassword(event.target.value);
}
const submitIsValid = () => {
  let result = {test: true};
  if(password.length < 4) {
    result.test = false;
    result.passwordLength = "Entered password is too short. Please enter at least 4 characters."
  }
  if(username.length < 4) {
    result.test = false;
    result.usernameLength = "Username must be atleast 4 characters"
  }

  if(password != confirmPassword) {
      result.test = false;
      result.passwordMatch = "Passswords do not match"
  }
  return result;
}
// async function submitOnClick(event) {
//   event.preventDefault();
//   if(submitIsValid().test) {
//     fetchLogin(username, password)
//     .then((response) => {
//       console.log('response', response);
//       // {
//       //   "success": true,
//       //   "error": null,
//       //   "data": {
//       //     "token": "xyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTg5MDY2ZGQ0MzkxNjAwTc1NTNlMDUiLCJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE1ODYwMzgzODF9.CTj4owBl0PB-G6G4E_1l6DS6_cVc0iKcMzBIWFUYM1p",
//       //     "message": "Thanks for logging in to our service."
//       //   }
//       // }
//       if(response.success) {
//         setUser({
//           username: username,
//           token: response.data.token,
//         });
//         return <Redirect to='/posts' />;
//       } else {
//         setErrors(
//           <>
//           <p>{response.error.message}</p>
//           </>
//         )
//       }
//     })
//   } else {
//     //render errors?
//     setErrors(
//       <>
//         {submitIsValid().passwordLength ? <p> {submitIsValid().passwordLength}</p> : null}
//         {submitIsValid().usernameLength ? <p> {submitIsValid().usernameLength}</p> : null}
//         {submitIsValid().passwordMatch ? <p> {submitIsValid().passwordMatch}</p> : null}
//       </>
//     );
//   }
// }
      return (
        <main id="main-holder">
            {user ? <Redirect to='/posts' /> : null}
        <div className='App'></div>
          <h1 id="register-header">Register</h1>
          <div id="login-error-msg-holder">
            <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
          </div>
          <form id="register-storage">
          <input onChange={usernameOnChange} type="text" name="username" id="username-field" className="register-storage-field" placeholder="Username"></input>
          <input onChange={passwordOnChange}type="password" name="password" id="password-field" className="register-storage-field" placeholder="Password"></input>
            <input onChange={confirmPasswordOnChange}type="password" name="password" id="confirm-password-field" className="register-storage-field" placeholder="Confirm Password"></input>
            <input onClick={handleFormSubmit} type="submit" value="Register" id="register-storgae-submit"></input>
            {errors}
          </form>
        </main>
      )
}

export default Register;