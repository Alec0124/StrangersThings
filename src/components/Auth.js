import React, { useEffect } from 'react';
import "./auth.css";

const Auth = () => {

    return <>
        <h1>Auth Page</h1>
        </>
    
}


export default function App() {
    useEffect(() => {
        async function registerUser() {
            const result = await fetch(
                'https://strangers-things.herokuapp.com/api/2010_UNF_RM_WEB_PT/users/login'
            )
        }
            {
                method: 'POST',
                headers; {
                    'Content-Type'; 'application.json'
                };
                body: JSON.stringify({
                    user: {
                        username: 'null',
                        password: 'null'
                    }
                })
            }
    }
    )}

const data = await result.json();
console.log('Created user: ', data);

registerUser();

return(
    <div className="App">
        <h1>Login</h1>
    </div>
)