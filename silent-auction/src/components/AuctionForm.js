import React, { useState, useEffect } from 'react';


const initialAuction = {
    id: '',
    title: '',
    description: '',
    seller: '',
    endTime: ''
}


const auctionForm = () => {
// The Seller form for creating an auction
    const [auction, setAuction] = useState(initialAuction);

    useEffect(() => {

    })

    const handleChange = e => {
        setAuction({
            ...auction,
            [e.target.name]: e.target.value
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
                    placeholder='description'
                    value={auction.description}
                    />
            </form>
        </div>
    )
}
export default auctionForm