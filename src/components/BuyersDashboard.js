
import React, { useState, useEffect, useContext } from 'react';
import { AuctionContext } from '../contexts/AuctionContext';
import { UserContext } from '../contexts/UserContext';
import { axiosWithAuth } from '../utils/axiosWithAuth';



const BuyersDashBoard = () => {
    const [watchedAuctions, setWatchedAuction] = useState([])
    const auctions = useContext(AuctionContext);
    const user = useContext(UserContext)

    useEffect(() => {
        axiosWithAuth()
        .get('/api/watching')
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    })
    return(
        <div className ="buyers-dashboard">
         
        {watchedAuctions.map(auction => {
            console.log(auction)
            //should be each aucton card
            //add the save and delete component 
        })}

       </div>
    )
}
export default BuyersDashBoard