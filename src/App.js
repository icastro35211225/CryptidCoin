import './App.css';
import Navbar from './components/navbar'
import PageBody from './components/dummy';
import './components/board.css'
import Leaderboard from './components/leaderBoard';
function App() {
    return (
        <div className="App">
            <Navbar />
            <PageBody />
            <Leaderboard />
        </div>
    );
}

export default App;