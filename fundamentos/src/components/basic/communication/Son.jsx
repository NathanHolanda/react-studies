import React from 'react'

export default props => {
    return (
        <div>
            <button onClick={() => props.alterValues('Alfredo', 52, true)}>Alterar valores</button>
        </div>
    )
}