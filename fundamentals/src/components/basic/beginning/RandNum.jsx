import React from 'react'

export default props => {
    let randNum = Math.random() * (props.max - props.min) + props.min
    return (
        <>
            <p>{Math.round(randNum)}</p>
        </>
    )
}