import React from 'react'

export default function (props){
    //props are readonly!!!
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}