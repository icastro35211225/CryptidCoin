
import './App.css';
import Navbar from './components/navbar'
import React, { createContext, useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import SignUp from './components/signup';
import Login from './components/login';
import AddCryp from './components/addCryp';
import AllCryps from './components/allCryps';
import Footer from './components/footer';
import axios from 'axios';

// const path = 'http://35.184.229.236:3001';

// export const CardContext = createContext();

const App = () => {
    // const [cards, setCards] = useState();
    // async function getCards() {
    //     let cards;
    //     await axios.get(`${path}/getCryps`)
    //         .then((res) => {
    //             setCards(res.data);
    //         })
    // }

    // useEffect(() => {
    //     getCards();

    // }, [])

    // console.log(cards);
    const user = "todd";
    return (
        <BrowserRouter>
            <div className='hotBar'>
                <Navbar>
                    {/* <CardContext.Provider> */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path='/signup' element={<SignUp />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/addCryp' element={<AddCryp />} />
                        <Route path='/getCryps' element={<AllCryps />} />
                    </Routes>
                    {/* </CardContext.Provider> */}
                </Navbar>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
