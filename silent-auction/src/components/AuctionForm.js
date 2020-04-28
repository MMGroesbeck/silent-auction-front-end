import React, { useState, useEffect, useContext } from 'react';
import { AuctionContext } from '../contexts/AuctionContext'
import { UserContext } from '../contexts/UserContext';


const nowtime = new Date();

const initialAuction = {
    id: 0,
    name: "",
    description: "",
    user_id: 0,
    image_url: "",
    end_datetime: null
}


const AuctionForm = () => {
    // The Seller form for creating an auction
    const auctions = useContext(AuctionContext);
    const user = useContext(UserContext)
    const [auction, setAuction] = useState(initialAuction)

    useEffect(() => {
        console.log(auctions.auctionList)
    })

    const handleChange = e => {
        e.persist()
        setAuction({
            ...auction,
            id: (auctions.auctionList.length + 1),
            user_id: user.currentUser.id,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        auctions.setAuctionList([
            ...auctions.auctionList,
            auction
        ])
        // axioswithauth
        // .put(url)
        // .then(res => {
        // route to logged in auctionList
        // })
        // .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>Post your auction</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    onChange={handleChange}
                    placeholder='Title'
                    value={auction.name}
                />
                <input
                    type='text-area'
                    name='description'
                    onChange={handleChange}
                    placeholder='description'
                    value={auction.description}
                />
                <input
                    type='text-area'
                    name='image_url'
                    onChange={handleChange}
                    placeholder='image url'
                    value={auction.image_url}
                />
                <input
                    type='number'
                    name='end_datetime'
                    onChange={handleChange}
                    placeholder='Length of Auction (in hours)'
                    value={auction.end_datetime}
                />
            <button>Submit Auction!</button>
            </form>
        </div>
    )
}
export default AuctionForm