import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { AuctionContext } from "../contexts/AuctionContext";

const initialAuction = {
    id: 0,
    name: "",
    description: "",
    user_id: 0,
    image_url: "",
    end_datetime: ''
}

const UpdateAuction = () => {
    const [auction, setAuction] = useState(initialAuction)
    const { id } = useParams();
    const { push } = useHistory();
    const auctions = useContext(AuctionContext)

    useEffect(() => {
        axios
            .get(`https://silent-auctions.herokuapp.com/api/auctions/${id}`)
            .then(res => {
                console.log(res.data[0])
                setAuction(res.data[0])
            })
            .catch(err => console.log(err))
    }, [id]);

    const handleChange = e => {
        e.persist();
        setAuction({
            ...auction,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/api/auctions/${id}`, auction)
            .then(res => {
                console.log(res.data.resp[0])            
                auctions.auctionList.sort();
                console.log(auctions.auctionList)
                push('/protected/dashboard')
            })
    }

    return (
        <div>
            <h2>Update Auction</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    onChange={handleChange}
                    placeholder='name'
                    value={auction.name}
                />

                <input
                    type="text"
                    name="description"
                    onChange={handleChange}
                    placeholder="description"
                    value={auction.description}
                />

                <input
                    type="text"
                    name="image_url"
                    onChange={handleChange}
                    placeholder="image_url"
                    value={auction.image_url}
                />
                 <button>Update</button>
            </form>
        </div>
    )

}

export default UpdateAuction;