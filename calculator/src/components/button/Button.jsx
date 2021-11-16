import React from 'react'
import './button.css'

export default props => {
    return (
        <button className={`
            button 
            ${props.double ? 'button-2x ' : ''}
            ${props.triple ? 'button-3x ' : ''}
            ${props.operation ? 'operation ' : ''}
        `}>
            {props.label}
        </button>
    )
}