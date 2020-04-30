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

// Context
import { UserContext } from './contexts/UserContext';
import { AuctionContext } from './contexts/AuctionContext';


import './App.css';
import axios from 'axios';
import SellerDash from './components/SellersDashboard';

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
          <SellerDash/>
        <Link to='/login'>Login</Link>
            <Navigation>
         <NavItem icon ="🛎">
           <DropdownMenu />
         </NavItem>
        </Navigation>
      <Switch>
        <Route exact path="/protected/buyer">
          <Auctions auctions={auctionList} />
        </Route>
        <Route exact path="/protected/seller">
          <AuctionForm />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route component={Login} />
      </Switch> 
          <AuctionCard />
          {/* <Register />  */}
          {/* <Login /> */}
          {/* <AuctionForm /> */}
      </AuctionContext.Provider>
      </UserContext.Provider>


    </div>
  );
}

export default App;