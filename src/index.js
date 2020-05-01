import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Auctions from './components/Auctions'
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

// const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Router>
    {/* <AppWithRouter /> */}
    <Auctions />
  </Router>,
  document.getElementById('root')
);

