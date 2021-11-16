import React from 'react'

export default props => {
    return (
        <div>
            <button className="plus" onClick={props.onMinus}>-</button>
            <button className="minus" onClick={props.onPlus}>+</button>
        </div>
    )
}