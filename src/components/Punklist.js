import React from 'react'
import { useState} from 'react'
import { CollectionCard } from './CollectionCard'
import './Punklist.css'

export const Punklist = ({ punkListData, setSelectedPunk }) => {
    
    return (
        <div className="punklist">
            {punkListData.map(punk => (
                <div onClick={() => setSelectedPunk(punk.token_id)}>
                    <CollectionCard
                    key={punk.token_id}
                    id={punk.token_id}
                    name={punk.name}
                    traits={punk.traits["value"]}
                    image={punk.image_original_url}
                    />
                </div>
            ))}
        </div>
    )
}
