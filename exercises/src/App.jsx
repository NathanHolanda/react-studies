import React, { Fragment } from "react"
import FirstComp from "./components/basic/beginning/First"
import WithParams from "./components/basic/beginning/WithParams"
import FragmentComp from "./components/basic/fragment/FragmentComp"
import RandNum from "./components/basic/beginning/RandNum"
import Card from "./components/layout/Card"
import Family from "./components/basic/family/Family"
import FamilyMember from './components/basic/family/FamilyMember'
import StudentsList from './components/basic/list/StudentsList'
import ProductsTable from './components/basic/table/ProductsTable'
import OddOrEven from "./components/basic/conditional/OddOrEven"
import UserWelcome from "./components/basic/conditional/UserWelcome"
import Father from "./components/basic/communication/Father"
import Input from "./components/basic/form/Input"
import Counter from "./components/basic/counter/Counter"
import Raffle from "./components/basic/raffle/Raffle"

export default () => {
    return (
        <>
            <h1 className="title">Meus primeiros exercícios com React.js</h1>
            <div className="app">
                <Card title="#11 - Sorteio MegaSena" color="#080">
                    <Raffle></Raffle>
                </Card>
                <Card title="#10 - Componente baseado em classe" color="#800">
                    <Counter number={100}></Counter>
                </Card>
                <Card title="#9 - Componente controlado" color="#088">
                    <Input></Input>
                </Card>
                <Card title="#8 - Componente com estado" color="#880">
                    <Father></Father>
                </Card>
                <Card title="#7 - Renderização condicional" color="#008">
                    <OddOrEven num={Math.round(Math.random() * (100 - 1) + 1)}></OddOrEven>
                    <UserWelcome user={{ name: 'Nathan' }}></UserWelcome>
                    <UserWelcome></UserWelcome>
                </Card>
                <Card title="#6 - Tabela" color="#080">
                    <ProductsTable></ProductsTable>
                </Card>
                <Card title="#5 - Lista" color="#800">
                    <StudentsList></StudentsList>
                </Card>
                <Card title="#4 - Família" color="#088">
                    <Family familyName="Alves">
                        <FamilyMember name='Carlos'></FamilyMember>
                        <FamilyMember name='José'></FamilyMember>
                        <FamilyMember name='Ana'></FamilyMember>
                    </Family>
                </Card>
                <Card title="#3 - Número aleatório" color="#880">
                    <RandNum min={1} max={10} />
                </Card>
                <Card title="#2 - Fragmento" color="#008">
                    <FragmentComp />
                </Card>
                <Card title="#1 - Com parâmetros" color="#080">
                    <WithParams title="Lorem ipsum" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                </Card>
                <Card title="#0 - Primeiro componente" color="#800">
                    <FirstComp />
                </Card>
            </div>
        </>
    )
}