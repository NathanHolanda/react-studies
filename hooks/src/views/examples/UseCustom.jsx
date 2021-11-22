import React, {useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter, useFetch } from '../../customs/hooks'

const UseRef = (props) => {
    const [stateItems, setStateItems] = useState([])
    const getStateItems = states => states.map(state => <li key={state.sigla}>{state.sigla} - {state.nome}</li>)

    const [counter, inc, dec] = useCounter(20)
    const states = useFetch('http://files.cod3r.com.br/curso-react/estados.json')

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Exercício #1" />
            <section className="center">
                <p className="text">{counter}</p>
                <div>
                    <button onClick={() => dec()} className="btn">-1</button>
                    <button onClick={() => inc()} className="btn">+1</button>
                </div>
            </section>

            <SectionTitle title="Exercício #2" />
            <section className="center">
                <button className="btn" onClick={() => { setStateItems(getStateItems(states.data)) }}>Gerar estados</button>
                {states.loading ? '' : <ul>{stateItems}</ul>} 
            </section>
        </div>
    )
}

export default UseRef
