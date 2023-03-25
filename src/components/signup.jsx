import React, { useState } from "react";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function SignUp() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function signup() {
        Axios.post('http://localhost:3001/signup', {
            username: username + "",
            password: password
        }).then((response) => {
            console.log(response);
            navigate('/');
        })
    }

    return (
        <>
            <h1>Sign Up</h1>
            <form>
                <input id="name" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"></input>
                <input id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                <button type="submit" onClick={(e) => {
                    e.preventDefault();
                    signup();
                }} >Sigup</button>
            </form>
        </>
    )
}