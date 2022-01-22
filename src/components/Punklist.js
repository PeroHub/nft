import React from 'react'
import { CollectionCard } from './CollectionCard'
import './Punklist.css'

export const Punklist = ({ punkListData }) => {
    return (
        <div className="punklist">
            {punkListData.map(punk => (
                <div>
                    <CollectionCard 
                    key={punk.token_id}
                    id={punk.token_id}
                    traits={punk.traits}
                    image={punk.image_original_url}
                    />
                </div>
            ))}
        </div>
    )
}
