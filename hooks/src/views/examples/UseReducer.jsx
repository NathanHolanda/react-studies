import React, {useReducer, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import reducer, {initialState} from '../../storage/reducers/reducer'
import { add1, addNumber, divideBy25, login, multiplyBy7, parseInt} from '../../storage/actions/actions'

const UseReducer = (props) => {
    const [number, setNumber] = useState(0)

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <SectionTitle title="Exercício #1" />
            <section className="center">
                <p className="text">Usuário: {state.user ? state.user : 'Usuário não logado'}</p>
                <p className="text">Idade: {state.age}</p>
                <div>
                    <button className="btn" onClick={() => login(dispatch, 'NathanHolanda')}>Login</button>
                    <button className="btn" onClick={() => add1(dispatch)}>+1</button>
                    <button className="btn" onClick={() => multiplyBy7(dispatch)}>*7</button>
                    <button className="btn" onClick={() => divideBy25(dispatch)}>/25</button>
                    <button className="btn" onClick={() => parseInt(dispatch)}>parseInt</button>
                    <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
                    <button className="btn" onClick={() => addNumber(dispatch, number)}>{number >= 0 ? `+${number}` : `${number}`}</button>
                </div>
            </section>
        </div>
        
    )
}

export default UseReducer
