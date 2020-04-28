import React, { useState, useEffect, useContext } from 'react';
import { AuctionContext } from '../contexts/AuctionContext'


const initialAuction = {
    id: '',
    title: '',
    description: '',
    seller: '',
    endTime: ''
}


const AuctionForm = () => {
// The Seller form for creating an auction
    const auctions = useContext(AuctionContext);
    const auction = useState(initialAuction)


    useEffect(() => {
        console.log(auctions)
    })

    const handleChange = e => {
        auctions.setAuction({

        })
    }

    const handleSubmit = e => {
        e.preventDefault();
    }
    

    return (
        <div>
            <h2>Post your auction</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='title'
                    onChange={handleChange}
                    placeholder='Title'
                    value={auction.title}
                    />
                <input
                    type='text-area'
                    name='description'
                    onChange={handleChange}
                    placeholder='description'
                    value={auction.description}
                    />
            </form>
        </div>
    )
}
export default AuctionForm