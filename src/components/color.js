import React from 'react'
import StarRating from './starrating'

const Color = ({title, hex, rating, onRate=f=>f, onRemove=f=>f}) => (
    <div className="color cf">
        <p onClick={onRemove}>[Delete]</p>
        <h1><span style={{color: hex}}>{title}</span></h1>
        <p>color Code: {hex}</p>
        <StarRating rating = {rating} onRate={onRate}/>

    </div>
) 

export default Color