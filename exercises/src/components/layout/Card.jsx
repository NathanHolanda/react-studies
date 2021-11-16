import React from 'react'
import './card.css'

export default props => {
    const {title} = props
    const bgHeader = {
        backgroundColor: props.color || '#0f0'
    }
    const borderMain = {
        borderColor: props.color || '#0f0'
    }
    return (
        <div className="_card">
            <header style={bgHeader}>{title}</header>
            <main style={borderMain}>{props.children}</main>
        </div>
    )
}