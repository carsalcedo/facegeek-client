import './App.css';
import Auth from './pages/Auth/Auth';
//import Home from './pages/home/Home';
//import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div className="App">
        <div className='blur' style={{top: '-18%', right: '0'}}/>
        <div className='blur' style={{top: '36%', left: '-8rem'}}/>
        <Auth/>
    </div>
  );
}

export default App;
