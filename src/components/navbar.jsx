import React, { useState, useContext, useEffect } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { UserContext } from '../context/userContext';

export default function Navbar({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState('');
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
        },
        {
            path: '/login',
            name: 'Log In'
        },
        {
            path: '/addCryp',
            name: 'Add Cryp',
            admin: true
        },
        {
            path: '/getCryps',
            name: 'All Cryps',
            admin: true
        },
        {
            path: '/AccountHome',
            name: 'Account'
        }
    ]

    async function getUser() {
        const userInfo = JSON.parse(await localStorage.getItem('userInfo'));
        setUser(userInfo);
        console.log(userInfo);
    }

    async function logOut() {
        localStorage.clear();
        setUser('');
        navigate('/');
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar" >
                <div className="top_section">
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => {
                        if (user && item.name === 'Sign Up' || user && item.name === 'Log In') {
                            return "";
                        } if (item.admin === true) {
                            if (user && user.admin === true) {
                                return (<Link to={item.path} key={index} className="link" activeclassName="active">
                                    < div style={{ display: isOpen ? "block" : "none" }
                                    } className="link_text" > {item.name}</div>
                                </Link>)
                            } else {
                                return '';
                            }
                        }
                        return (<Link to={item.path} key={index} className="link" activeclassName="active">
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </Link>)
                    })
                }
                {
                    user ? <Link className="link" activeclassName="active" onClick={() => logOut()}>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Log Out</div>
                    </Link> : ''
                }
            </div >
            <div>
                {/* {user ? <div className="welcome"><h1>Welcome {user.username}</h1></div> : <div className="welcome"><h1>Welcome, Please Log In</h1></div>} */}

            </div>
            <main>
                {children}
            </main>
        </div >
    )
}