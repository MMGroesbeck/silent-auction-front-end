import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          The Silent Auction! 
        </h1>
        <i class="fas fa-gavel"></i>
        <p>Don't have an account?
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          
        >
            Sign up!
        </a>
        </p>
      </header>
    </div>
  );
}

export default App;
