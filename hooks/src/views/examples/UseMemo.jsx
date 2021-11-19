import React, {useState, useMemo} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseMemo = (props) => {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)
    const [value3, setValue3] = useState(0)

    const sum = (a, b) => {
        const future =  Date.now() + 2000
        while(Date.now() < future)
            continue
        return a + b
    }

    const result = useMemo(() => sum(value1, value2), [value1, value2])

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <SectionTitle title="Exercício #1" />
            <section className="center">
                <input type="number" className="input" value={value1} onChange={e => setValue1(+e.target.value)} />
                <input type="number" className="input" value={value2} onChange={e => setValue2(+e.target.value)} />
                <input type="number" className="input" value={value3} onChange={e => setValue3(+e.target.value)} />
                <span className="text">Resultado: {result}</span>
            </section>
        </div>
    )
}

export default UseMemo
