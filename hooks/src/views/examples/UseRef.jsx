import React, {useState, useEffect, useRef} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const mergeStrings = (s1, s2) => {
    const a1 = [...s1]

    const s3 = a1.reduce((a3, char, i) => {
        if(s2[i] !== '')
            return [...a3, char, s2[i]]
    }, []).join('')

    return s3
}

const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const [value3, setValue3] = useState("")
    const countRender = useRef(0)
    const input1 = useRef(null)
    const input2 = useRef(null)

    useEffect(() => {
        input2.current.focus()
        countRender.current++
        setValue3(mergeStrings(value1, value2))
    }, [value1])  
    useEffect(() => {
        input1.current.focus()
        countRender.current++
        setValue3(mergeStrings(value1, value2))
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #1" />
            <section className="center">
                <span className="text">{value3}</span>
                <span className="text">Renderizações: </span>
                <span className="text red">{countRender.current}</span>
                <input type="text" className="input" ref={input1} value={value1} onChange={e => setValue1(e.target.value)} />
            </section>
            <SectionTitle title="Exercício #2" />
            <section className="center">
                <input type="text" className="input" ref={input2} value={value2} onChange={e => setValue2(e.target.value)} />
            </section>
        </div>
    )
}

export default UseRef
