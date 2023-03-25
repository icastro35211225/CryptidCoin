import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/signup',
            name: 'Sign Up'
        }
    ]

    return (
        <>
            <div className="container">
                <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                    <div className="top_section">
                        <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                            <FaBars onClick={toggle} />
                        </div>
                    </div>
                    {
                        menuItem.map((item, index) => (
                            <Link to={item.path} key={index} className="link" activeclassName="active">
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            </Link>
                        ))
                    }
                </div>
            </div>

            {/* <ul>
                <li><Link to="/">Home </Link></li>
                <li><Link to="/signup">Sign up </Link></li>
                <li><Link to="/">Home </Link></li>
            </ul> */}
        </>
    )
}