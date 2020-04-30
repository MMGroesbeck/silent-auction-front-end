import React from 'react'
import Login from './Login'
import Register from './Register'


const Dashboard = () => {

    // Returns the specific Dashboard to the user 
    // depending on their role (bidder or seller)
    return(
        <div>
        <Login/>
        <Register/>
        </div>
    )
}
export default Dashboard