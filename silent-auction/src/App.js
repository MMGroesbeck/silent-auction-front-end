import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom'

// Components
import Auctions from './components/Auctions';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import AuctionForm from './components/AuctionForm';
import { Navigation, DropdownMenu } from './components/Navigation'
import { NavItem } from './components/Navigation'
import Register from './components/Register'
import  SignUp from './components/ClonedRegister'

// Context
import { UserContext } from './contexts/UserContext';
import { AuctionContext } from './contexts/AuctionContext';


import './App.css';
import axios from 'axios';

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
      <Navigation>
         <NavItem icon ="🤫">
            <DropdownMenu />
         </NavItem>
      </Navigation>
  
   <h1> The Silent Auction! </h1>
   

    <Login />
        {/* <SignUp/> */}
          {/* <Register />  */}
          {/* <Login /> */}
           {/* <AuctionForm /> */}

    </div>
  );
}

export default App;