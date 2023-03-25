import './App.css';
import Navbar from './components/navbar'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import SignUp from './components/signup';

function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/signup' element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;