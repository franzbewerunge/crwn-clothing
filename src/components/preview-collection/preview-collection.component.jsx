import React, {useState} from 'react'

import './preview-collection.scss'

const CollectionPreview = ({ key, title, items }) => {
    
    return (
    <div className='collection-section'>
        <h1 className='title'>{title}</h1>
        
        <div className='collection-preview'>
            {items.slice(0,4).map(item => (
                <div className='collection-item'>

                    <img className='image' src={item.imageUrl} alt=""/>
                    <div className='item'> 
                        <p>{item.name}</p>
                        <p>{`$${item.price}`}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
)}

 
export default CollectionPreview;