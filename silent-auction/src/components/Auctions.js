import React, { useState, useEffect } from 'react'
import AuctionForm from './AuctionForm'
import axios from 'axios'

const auctionsList =  'https://silent-auctions.herokuapp.com/api/auctions'
const Auctions = () => {
  // placeholder data
  const auctionListsss = [
    {
      id: 1,
      name: "Fun",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ad vel, voluptatum perspiciatis saepe rem, officia illo cumque iusto omnis enim, deserunt alias dolores voluptates possimus velit sit nesciunt commodi.",
      user_id: 1001,
      image_url: "",
      end_datetime: '1:22pm'
    },
    {
      id: 2,
      name: "More Fun",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam provident doloremque recusandae temporibus quas nemo aliquid officia. In quidem aut reiciendis sint, autem nam veritatis soluta possimus tempore, molestiae provident!",
      user_id: 2002,
      image_url: "",
      end_datetime: '4:22pm'
    },
    {
      id: 3,
      name: "The Most Fun",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic aliquam architecto blanditiis, quas doloribus sit autem nihil nostrum veniam nesciunt voluptatum dolorum animi aperiam nulla quos iure sed deleniti earum?",
      user_id: 3003,
      image_url: "",
      end_datetime: '7:22pm'
    },
  ]


  // Axios call
  const [auctions, setAuctions] = useState({})

  axios
    .get(auctionsList)
    .then((response) => {
      console.log(response)
      // setValues(response)
    })
    .catch((err) => {
      console.error(err)
    })

  return (
    null
  )
}

export default Auctions