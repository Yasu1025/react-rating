import React from 'react'
import Star from './star'

const StarRating = ({rating, total=5, onRate=f=>f}) =>(
    <div className="cf star_container">
        {[...Array(total)].map((n,i)=>(
            <Star key={i}
                  selected={i < rating}
                  onRate={() => onRate(i+1)} />
        ))}
        <p>{rating} of {total}</p>
    </div>
)


export default StarRating