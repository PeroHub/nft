import React from 'react'
import { CollectionCard } from './CollectionCard'
import './Punklist.css'

export const Punklist = ({ punkListData, setSelectedPunk }) => {
    
    return (
        <div className="punklist">
            {punkListData.map(punk => (
                <div onClick={() => setSelectedPunk(punk.token_id)} key={punk.token_id}>
                    <CollectionCard
                    
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
