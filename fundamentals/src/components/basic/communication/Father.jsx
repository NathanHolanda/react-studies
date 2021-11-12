import React, {useState} from 'react'
import Son from './Son'

export default props => {
    const [name, setName] = useState('none')
    const [age, setAge] = useState(0)
    const [employed, setEmployed] = useState(false)

    function setAttrs(name, age, employed){
        setName(name)
        setAge(age)
        setEmployed(employed)
    }

    return (
        <div>
            <p>Nome: {name}</p>
            <p>Idade: {age}</p>
            <p>Empregado: {employed ? "Sim" : "Não"}</p>
            <Son alterValues={setAttrs}></Son>
        </div>
    )
}