import React, {useState, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseEffect = (props) => {
    const [factorial, setFactorial] = useState(1)
    const [numberA, setNumberA] = useState(0)
    const [odd, setOdd] = useState(0)
    const [numberB, setNumberB] = useState(0)

    const calcFactorial = num => {
        num = parseInt(num)
        if(num < 0) return -1
        if(num === 0) return 1
        return calcFactorial(num - 1) * num
    }

    useEffect(() => {
        if(numberA > 170)
            setFactorial('Eita!!!')
        else if(numberA < 0) 
            setFactorial('Número não válido')
        else if(numberA)
            setFactorial(calcFactorial(numberA))
    }, [numberA])

    const isOdd = num => {
        num = parseInt(num)
        if(num % 2 === 0) return true
        return false
    }

    useEffect(() => setOdd(isOdd(numberB)), [numberB])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #1"/>
            <section className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{factorial}</span>
                </div>
                <input type="number" className="input" value={numberA} onChange={e => setNumberA(e.target.value)}/>
            </section>

            <SectionTitle title="Exercício #2"/>
            <section className="center">
                <div>
                    <span className="text">Ímpar: </span>
                    <span className={`
                        text 
                        ${odd ? 'green' : 'red'}
                    `}>{odd ? 'Sim' : 'Não'}</span>
                </div>
                <input type="number" className="input" value={numberB} onChange={e => setNumberB(e.target.value)}/>
            </section>
        </div>
    )
}

export default UseEffect
