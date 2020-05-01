import React, { useState, useEffect, useContext } from 'react';
import { AuctionContext } from '../contexts/AuctionContext'
import { UserContext } from '../contexts/UserContext';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import * as moment from 'moment';
import { useHistory } from 'react-router-dom';


const nowtime = new Date();

const initialAuction = {
    id: 0,
    name: "",
    description: "",
    user_id: 0,
    image_url: "",
    end_datetime: '',
    
}


const AuctionForm = () => {
    // The Seller form for creating an auction
    const auctions = useContext(AuctionContext);
    const user = useContext(UserContext)
    const [auction, setAuction] = useState(initialAuction)
    const { push } = useHistory();
    let endtime;

    
    useEffect(() => {
        console.log(auctions.auctionList)
    })

    const handleChange = e => {
        setAuction({
            ...auction,
            id: (auctions.auctionList.length + 1),
            user_id: user.currentUser.id,
            [e.target.name]: e.target.value
        })
    }


    const setEndTime = hours => {
        endtime = moment(nowtime).add(hours, 'h').toDate().toISOString()
        setAuction({
            ...auction,
            end_datetime: endtime
        })
    }

    console.log(endtime)
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/auctions', auction)
            .then(res => {
                console.log(res)
                auctions.setAuctionList([
                    ...auctions.auctionList,
                    auction
                ])
                push('/protected/dashboard')
            })
            .catch(err => console.log(err))
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
                    type='text'
                    name='end_datetime'
                    onChange={setEndTime}
                    placeholder='Length of Auction (in hours)'
                    value={auction.end_datetime}
                />
            <button>Submit Auction!</button>
            </form>
        </div>
    )
}
export default AuctionForm