import React from 'react';
import './App.css';

import Register from './components/Register'

function App() {


  
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>
          The Silent Auction! 
        </h1> */}
        {/* <p>Don't have an account?
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
            Sign up!
        </a>
        </p> */}
          <Register />
      </header>
    </div>
  );
}

export default App;
