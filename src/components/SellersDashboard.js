import React, { useState, useEffect, useContext } from 'react';
import { AuctionContext } from '../contexts/AuctionContext';
import { UserContext } from '../contexts/UserContext';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const testAuctions = [
    {
        id: 1,
        name: 'thing 1',
        description: 'description for thing 1',
        user_id: 1,
        image_url: 'https://image.shutterstock.com/z/stock-vector-music-earphones-quality-electronic-items-stereo-headphones-technology-vector-realistic-pictures-1361791175.jpg',
        end_datetime: Date.now().toISOString()
    },
    {
        id: 2,
        name: 'thing 2',
        description: 'description for thing 2',
        user_id: 1,
        image_url: 'https://image.shutterstock.com/z/stock-vector-music-earphones-quality-electronic-items-stereo-headphones-technology-vector-realistic-pictures-1361791175.jpg',
        end_datetime: Date.now().toISOString()
    }
]


const SellerDash = () => {
    const [sellerAuctions, setSellerAuctions] = useState([])
    const auctions = useContext(AuctionContext);
    const user = useContext(UserContext);

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
            <h2>Your Auctions:</h2>
            <div className ='seller_cards'>
            {sellerAuctions.map(auction => {
                console.log(auction)
                return (
                    <div className='seller_card'>
                        <h3>{auction.name}</h3>
                        <p>{auction.description}</p>
                        <p>End Time: {auction.end_datetime}</p>
                        <img src={auction.image_url} />
                    </div>
                )
            })}
            </div>
        </>
    )
}

export default SellerDash