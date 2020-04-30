import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const SavedAuction = ({list}) => {
    return(
        <div className="saved-Bids">
            <h3>Saved Bids</h3>
            {list.map(auction => {
                return (
                    <NavLink
                        to={`/api/bidders/${auction.id}`}
                        key={auction.id}
                        activeClassName="saved-active"
                    >
                        <span className="saved-auction">{auction.title}</span>
                    </NavLink>
                )
            })}
                <div className="feed-button">
                <Link to="/"> This is the Auction Feed </Link> 
                </div>
               

        </div>
    )
}