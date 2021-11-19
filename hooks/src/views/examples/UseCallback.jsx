import React, {useState, useCallback} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import Buttons from './UseCallbackButtons'

const UseCallback = (props) => {
    const[value, setValue] = useState(0)

    const inc = useCallback((num) => setValue(current => current + num), [setValue])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <SectionTitle title="Exercício #1" />
            <section className="center">
                <span className="text">{value}</span>
                <Buttons inc={inc}></Buttons>
            </section>
        </div>
    )
}

export default UseCallback
