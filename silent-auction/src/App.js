import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'

import Auctions from './components/Auctions';
import Navigation from './components/Navigation';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import AuctionForm from './components/AuctionForm';


import './App.css';
import axios from 'axios';



const App = () => {
  const [auctionList, setAuctionList] = useState([])

  const getAuctionList = () => {
    axios
      .get('link here')
      .then(res => setAuctionList(res))
      .catch(err => console.log(err))
  };

  useEffect(() => {
    getAuctionList();
  }, []);

  return (
    <div className="App">
      {/* Leaving this stuff here just in case, will put router below */}
      {/* <header className="App-header">
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
      </header> */}

      {/* <Navigation />

      <Switch>
        <ProtectedRoute exact path="/protected/buyer">
          <Auctions auctions={auctionList} />
        </ProtectedRoute>
        <ProtectedRoute exact path="/protected/seller">
          <Auctions auctions={AuctionForm} />
        </ProtectedRoute>
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch> */}


    </div>
  );
}

export default App;
