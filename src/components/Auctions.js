import React, { useState, useEffect } from 'react'
import './auctions.css'
import Card from './Card'
import axios from 'axios'
const auctionsList = 'https://silent-auctions.herokuapp.com/api/auctions'
const Auctions = () => {
  // Axios call
  const [auctions, setAuctions] = useState({})
  useEffect(() => {
    axios
      .get(auctionsList)
      .then((response) => {
        setAuctions(response.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])
  return (
    <div>
      <h1>Welcome to the Silent Auction!</h1>
      <h2>Auctions Currently Up:</h2>
      <div className='auction-cards'>
        {
          Array.from(auctions).map(auction => {
            return <Card props={auction} />
          })
        }
      </div>
    </div>
  )
}
export default Auctions

