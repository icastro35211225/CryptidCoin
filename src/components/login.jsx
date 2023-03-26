import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/userContext";
import './login.css'
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const path = 'http://35.184.229.236:3001';


    async function login() {
        if (userName && password) {
            await axios.post(`${path}/login`, {
                username: userName,
                password: password
            }).then((res) => {
                console.log(res.data);
                localStorage.setItem('userInfo', JSON.stringify(res.data[0]))
                navigate('/');
                window.location.reload(false);
            })
        }
    }
    return (
        <div className="login">

            <form>
                <h1>Log In</h1><br />
                <h2>Username</h2><br />
                <input
                    id="name"
                    value={userName}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username">

                </input>
                <br /><br />
                <h2>Password</h2><br />
                <input
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password">
                </input>
                <br /><br />
                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        login();
                    }}>Log In</button>
            </form>
        </div>


    );

}

export default Login;