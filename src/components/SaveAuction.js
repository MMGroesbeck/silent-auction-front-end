import React, {useState, useEffect} from 'react'


const SavedAuction = ({list}) => {
console.log(list)

    return(
        <div className="saved-list">
            <h3>Saved Auctions</h3>
            {list.map(auction =>{
                return(
                    <div>
                        {auction}
                    </div>
                )
            })}
            
        </div>
    )
}
export default SavedAuction
