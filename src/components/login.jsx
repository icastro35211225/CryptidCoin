import React, { useState } from "react";
import axios from "axios";

export default function Login() {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function login() {
        axios.get('http://localhost:3001/login', {
            username: userName,
            password: password
        }).then((res) => {
            console.log(res);
        })
    }
    return (
        <>
            <form>
                <div className="UserName container">
                    <h3>Username</h3>
                    <input
                        id="name"
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username">

                    </input>
                </div>
                <br></br>
                <div className="password contatiner">
                    <h4>Password</h4>
                    <input
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password">
                    </input>
                </div> <br />
                <div>
                    <button
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            login();
                            console.log(userName);
                            console.log(password);
                        }}>Log In</button>
                </div>
            </form>
        </>
    );

}