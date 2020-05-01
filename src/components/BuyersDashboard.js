
import React, { useState, useEffect, useContext } from 'react';
import { AuctionContext } from '../contexts/AuctionContext';
import { UserContext } from '../contexts/UserContext';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import SavedAuction from './SaveAuction';
import AuctionCard from './AuctionCard'
import Auctions from './Auctions';




const BuyersDashBoard = () => {
    const [watchedAuctions, setWatchedAuctions] = useState([])
    // const auctions = useContext(AuctionContext);
    const user = useContext(UserContext)
    const [auctions, setAuctions] = useState([{id:"", auction_name: ""}])


    useEffect(() => {
        axiosWithAuth()
        .get('/api/watching')
        .then(res => {
            console.log(res, "^^^^^^^^^")
            setWatchedAuctions(res.data)
        })
        .catch(err => console.log(err))
    },[])
   

    return(
        <>
            <h2>Your watched Bids:</h2>
        <div className ="buyers-dashboard">
        <SavedAuction list={watchedAuctions} />
        
        {
            auctions.map(auction => (
                <AuctionCard  auction={auction}/> 
            ))
        }
        
        

       </div>
       </>
    )
}
export default BuyersDashBoard