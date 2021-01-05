import './Login.css';

import React, { useState } from 'react';


export default function Login() {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const seConnecter = (event) => {
        if (username === 'test' && password === '1234') {

            document.location = '/home';
        }
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    return(
        <div>
            <label>
                Nom : 
                <input type="text" id="username" value={username} onChange={handleUsername} />
            </label>
            <br/>
            <label>
                Mot de passe : 
                <input type="text" id="username" value={password} onChange={handlePassword} />
            </label>
            <br/>
            <input type="submit" value="Envoyer" onClick={seConnecter}/>
        </div>
    )
}