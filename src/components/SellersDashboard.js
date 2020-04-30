import React, { useState, useEffect, useContext } from 'react';
import { AuctionContext } from '../contexts/AuctionContext';
import { UserContext } from '../contexts/UserContext';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory, useParams } from 'react-router-dom';

const SellersDashboard = () => {
    const [sellerAuctions, setSellerAuctions] = useState([])
    const auctions = useContext(AuctionContext);
    const user = useContext(UserContext);
    const { push } = useHistory();
    const { id } = useParams

    useEffect(() => {
        axiosWithAuth()
            .get('/api/auctions/seller')
            .then(res => {
                console.log(res)
                setSellerAuctions(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    const deleteAuction = (auction, e) => {
        e.preventDefault();
        axiosWithAuth()
            .delete(`/api/auctions/${auction.id}`)
            .then(res => {
                console.log('deleted', res)
                const newAuctions = sellerAuctions.filter(a => `${a.id}` !== res.data.id)
                setSellerAuctions(newAuctions)
                push('/protected/dashboard')
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <h2>Your Auctions:</h2>
            <div className='seller_cards'>
                {sellerAuctions.map(auction => {
                    console.log(auction)
                    return (
                        <div className='seller_card' key={auction.id}>
                            <h3>{auction.name}</h3>
                            <p>Status: {auction.status}</p>
                            <p>{auction.description}</p>
                            <p>End Time: {auction.end_datetime}</p>
                            <img src={auction.image_url} />
                            <button onClick={(e) => deleteAuction(auction, e)}>
                                Cancel</button>
                            <button onClick={() => push(`/protected/update-auction/${auction.id}`)}>
                                Edit</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default SellersDashboard