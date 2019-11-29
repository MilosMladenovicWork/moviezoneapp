import React from 'react';
import Logo from './Logo';
import Home from './Home';
import {useSelector} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  const mainColor = useSelector(state => state.mainColor)
  return (
    <div 
    className='appWrapper' 
    style={{
      backgroundColor:mainColor
    }}>
      <Router>
      <div 
      className="App"
      style={{backgroundImage:'linear-gradient(black 50%, rgba(0, 0, 0, 0.5))'}}>
        <Logo />
        <Home />
      </div>
      </Router>
    </div>
  );
}

export default App;
