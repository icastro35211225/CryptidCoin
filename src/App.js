import './App.css';
import Navbar from './components/navbar'
import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import SignUp from './components/signup';
import Login from './components/login';
import AddCryp from './components/addCryp';
import AllCryps from './components/allCryps';
import Footer from './components/footer';

const App = () => {
    const user = "todd";
    return (
        <BrowserRouter>
            <Navbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/addCryp' element={<AddCryp />} />
                    <Route path='/getCryps' element={<AllCryps />} />
                </Routes>
            </Navbar>
            <Footer />
        </BrowserRouter>
    );
}

export default App;