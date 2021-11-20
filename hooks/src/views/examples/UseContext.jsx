import React, {useContext} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import DataContext from '../../data/DataContext'

const UseContext = (props) => {
    const {number, text, setNumber} = useContext(DataContext)

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Exercício #1"/>
            <section className="center">
                <span className="text">#{number} - {text}</span>
                <div>
                    <button className="btn" onClick={() => setNumber(-1)}>-1</button>
                    <button className="btn" onClick={() => setNumber(1)}>+1</button>
                </div>
            </section>
        </div>
    )
}

export default UseContext
