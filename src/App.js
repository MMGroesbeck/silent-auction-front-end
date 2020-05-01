import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom'



// Components
import Auctions from './components/Auctions';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import AuctionForm from './components/AuctionForm';
import { Navigation, DropdownMenu } from './components/Navigation'
import { NavItem } from './components/Navigation'
import AuctionCard from './components/AuctionCard'
import  Register  from './components/Register'
import SellersDashboard from './components/SellersDashboard';
import UpdateAuction from './components/UpdateAuction';

import SavedAuction from './components/SaveAuction'
import Dashboard from './components/Dashboard'


// Context
import { UserContext } from './contexts/UserContext';
import { AuctionContext } from './contexts/AuctionContext';


import './App.css';
import axios from 'axios';
import BuyersDashBoard from './components/BuyersDashboard';


const initialUser = {
  id: 1,
  username: 'michaelb',
  email: 'test@gmail.com',
  role: 'seller'
}

const App = () => {
  const [auctionList, setAuctionList] = useState()
  const [currentUser, setCurrentUser] = useState(initialUser)



  const getAuctionList = () => {
    axios
      .get('https://silent-auctions.herokuapp.com/api/auctions')
      .then(res => setAuctionList(res.data))
      .catch(err => console.log(err))
  };

  useEffect(() => {
    getAuctionList();
  }, []);


  return (  
    <div className="App">
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <AuctionContext.Provider value={{ auctionList, setAuctionList }}>


          <Navigation>
            <NavItem icon="🛎">
              <DropdownMenu />
            </NavItem>
          </Navigation>
          <Switch>
            <ProtectedRoute exact path='/protected/seller' component={AuctionForm} />
            <ProtectedRoute exact path='/protected/dashboard'>
              <Dashboard />
            </ProtectedRoute>
            <ProtectedRoute exact path='/protected/update-auction/:id' component={UpdateAuction} />
            <Route exact path ='/' component={Auctions} />
            <Route exect path='/register' component={Register} />
            <Route exact path="/login" component={Login} />

          </Switch>

        </AuctionContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;