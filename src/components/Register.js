import React from 'react';
import "./Auth.css";
const BASE_URL = 'https://strangers-things.herokuapp.com/api/2010_UNF_RM_WEB_PT/users/login'

const Register = () => {
        {/* diplay Register*/}

        
      return (
        <main id="main-holder">
        <div className='App'></div>
          <h1 id="register-header">Register</h1>
          <div id="login-error-msg-holder">
            <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
          </div>
          <form id="register-storage">
          <input type="text" name="username" id="username-field" class="register-storage-field" placeholder="Username"></input>
            <input type="password" name="password" id="password-field" class="register-storage-field" placeholder="Password"></input>
            <input type="submit" value="Register" id="register-storgae-submit"></input>
          </form>
        </main>
      )
}

export default Register;