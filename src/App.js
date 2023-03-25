import './App.css';
import Navbar from './components/navbar'
import PageBody from './components/dummy';
import Board from './components/leaderboard';
import './components/board.css'
function App() {
    return (
        <div className="App">
            <Navbar/>
            <PageBody/>
            <Board/>
        </div>
    );
}

export default App;