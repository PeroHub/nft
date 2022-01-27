import React from 'react'
import weth from '../assets/weth.png'
import './collectionCard.css'

export const CollectionCard = ({id, name, traits, image}) => {
    return (
        <div className="collectionCard" style={{marginTop: "30px"}}>
            <img src={image} alt="" />
            <div className="details">
                <div className="name" style={{margin: "20px"}}>
                    {name} 
                    <div className="id" style={{margin: "10px 0px"}}>*#{id}</div>
                </div>
                <div className="priceContainer">
                    <img src={weth} style={{margin: "0px 20px"}} className="wethImage" alt="" />
                    <div style={{margin: "0px"}} className="price">{traits}</div>
                </div>
            </div>
           
        </div>
    )
}
