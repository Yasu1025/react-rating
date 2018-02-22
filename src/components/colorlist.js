import React from 'react'
import Color from './color'

export const ColorList = ({colors=[], onRate =f=>f, onRemove=f=>f}) => (
        <div className="color_list">
            {(colors.length === 0) ?
                <p>There is no registerd colors</p> :
                colors.map((color, i) => (
                    <Color key={color.id}
                            {...color}
                            onRate = {(rating) => onRate(color.id, rating)}
                            onRemove = {() => onRemove(color.id)}/>
                            
                ))
                
            }
        </div>
)