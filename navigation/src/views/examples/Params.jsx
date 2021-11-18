import React from 'react'
import {useParams} from 'react-router-dom'

export default props => {
    const {param} = useParams()

    return (
        <div>
            <h1>Utilizando parâmetros</h1>
            <p>Valor passado: {param}</p>
        </div>
    )
}