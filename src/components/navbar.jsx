import React from 'react';
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {

    return (
        <ul>
            <li><Link to="/">Home </Link></li>
            <li><Link to="/signup">Sign up </Link></li>
            <li><Link to="/">Home </Link></li>
        </ul>
    )
}