import React from 'react'

export default props => {
    let isEven = props.num % 2 === 0 ? true : false
    return (
        <div>
            {isEven ? <p>Par</p> : <p>Ímpar</p>}
        </div>
    )
}