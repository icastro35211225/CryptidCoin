import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function SignUp() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const path = 'http://35.184.229.236:3001';

    function signup() {
        if (username && password) {
            axios.post(`${path}/signup`, {
                username: username,
                password: password
            }).then((response) => {
                console.log(response);
                // navigate('/');
            })
        }
    }

    return (
        <div className="login">
            <form>
                <h1>Sign Up</h1><br />
                <h2>Username</h2><br />
                <input id="name" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"></input><br /><br />
                <h2>Password</h2><br />
                <input id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input><br /><br />
                <button type="submit" onClick={(e) => {
                    e.preventDefault();
                    signup();
                }} >Sign up</button>
            </form>
        </div>
    )
}