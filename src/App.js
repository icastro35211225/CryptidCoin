
import './App.css';
import Navbar from './components/navbar'
import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import SignUp from './components/signup';
import Login from './components/login';
import { UserProvider } from './context/userContext';

const App = () => {
    const user = "todd";
    return (
        <BrowserRouter>
            <UserProvider>
                <div className='hotBar'>
                <Navbar>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path='/signup' element={<SignUp />} />
                        <Route path='/login' element={<Login />} />
                    </Routes>
                </Navbar>
                </div>
            </UserProvider>
        </BrowserRouter>
    );
}

export default App;
