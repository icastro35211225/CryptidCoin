import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/userContext";
import './login.css'

const Login = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useContext(UserContext);


    function login() {
        axios.get('http://localhost:3001/login', {
            username: userName,
            password: password
        }).then((res) => {

            if (res.status === 200) {
                // 
                setUser({ userName: res.user, })
            }
            console.log(res);
        })
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
                        console.log(userName);
                        console.log(password);
                    }}>Log In</button>
            </form>
        </div>

        
    );

}

export default Login;