import React, { useState, useEffect, useContext } from 'react';
import { AuctionContext } from '../contexts/AuctionContext';
import { UserContext } from '../contexts/UserContext';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const SellerDash = () => {
    const [sellerAuctions, setSellerAuctions] = useState([])
    const auctions = useContext(AuctionContext);
    const user = useContext(UserContext)

    useEffect(() => {
        axiosWithAuth()
            .get('/api/auctions/seller')
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    });
    return (
        <>
        {sellerAuctions.map(auction => {
            console.log(auction)
        })}
        </>
    )
}

export default SellerDash