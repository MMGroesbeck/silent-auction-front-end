import React, { useContext } from 'react'
import {UserContext} from '../contexts/UserContext'
import SellersDashboard from './SellersDashboard'
import BuyersDashboard from './BuyersDashboard'


const Dashboard = () => {
    const user = useContext(UserContext)
    // Returns the specific Dashboard to the user 
    // depending on their role (bidder or seller)
    console.log(user)
    if(user.currentUser.role === 'seller'){
        return <SellersDashboard />
    } else if (user.currentUser.role === 'bidder'){
        return <BuyersDashboard />
    }

}
export default Dashboard