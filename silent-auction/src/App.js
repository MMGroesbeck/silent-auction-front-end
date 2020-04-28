import React from 'react';
import './App.css';

import Register from './components/Register'
import { Navigation, DropdownMenu } from './components/Navigation'
import { NavItem } from './components/Navigation'




function App() {

// looking for a better method to import these Icons
  
  return (
    <div className="App">
      <Navigation>
         <NavItem icon ="⚙️">
           <DropdownMenu />
         </NavItem>
        </Navigation>
  
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

    </div>
  );
}

export default App;
