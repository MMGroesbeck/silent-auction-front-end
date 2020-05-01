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
    <div className='auction-cards'>
      {
       Array.from(auctions).map(auction => {
          return <Card props = {auction}/>
        })
      }
    </div>
  )
}
export default Auctions
// return (
//   <div className="App">
//     <h1 className="Header">Characters</h1>
//     {characters.map((character, ndx) => {
//       return <Character 
//       key = {ndx}
//       name={character.name}
//       mass={character.mass}
//       height={character.height}
//       hair_color={character.hair_color}
//       eye_color={character.eye_color}
//       />
//     })}
//   </div>
// );
// }