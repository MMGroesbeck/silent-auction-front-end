import React, {useState, useEffect } from "react";
import AuctionCard from './AuctionCard'
import axios from 'axios'


const Auctions = () => {

    const [auctions, setAuctions] = useState([{id:"", auction_name: ""}])

    useEffect(() => {
        axios
        .get('https://silent-auctions.herokuapp.com/api/auctions')
        .then(res => {
            console.log(res)
            setAuctions(res.data)
        })
        .catch(err => {console.log("error getting auctions", err)})
    },[])

    console.log("%%%", auctions)
    return(
        <div clasName = "auction-list">
        {
            auctions.map(auction => (
                <AuctionCard auction={auction}  />
            ))
        }
        </div>
    )
}
export default Auctions