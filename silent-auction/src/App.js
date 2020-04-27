import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'

// Components
import Auctions from './components/Auctions';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import AuctionForm from './components/AuctionForm';
import { Navigation, DropdownMenu } from './components/Navigation'
import { NavItem } from './components/Navigation'

// Context
import { UserContext } from './contexts/UserContext';
import { AuctionContext } from './contexts/AuctionContext';


import './App.css';
import axios from 'axios';


const App = () => {
  const [auctionList, setAuctionList] = useState([])
  const [currentUser, setCurrentUser] = useState({})

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
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <AuctionContext value={auctionList}>
        {/* 
            <Navigation>
         <NavItem icon ="🛎">
           <DropdownMenu />
         </NavItem>
        </Navigation>

      <Switch>
        <ProtectedRoute exact path="/protected/buyer">
          <Auctions auctions={auctionList} />
        </ProtectedRoute>
        <ProtectedRoute exact path="/protected/seller">
          <Auctions auctions={AuctionForm} />
        </ProtectedRoute>
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch> 
      
      */}
      </AuctionContext>
      </UserContext.Provider>


    </div>
  );
}

export default App;
