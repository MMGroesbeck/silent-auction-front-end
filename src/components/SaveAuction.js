import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const SavedAuction = ({list}) => {
    return(
        <div className="saved-Bids">
            <h3>Saved Bids</h3>
            {list.map(auction => {
                return 
            })}
        </div>
    )
}