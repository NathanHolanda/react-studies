import React from "react"
import FirstComp from "./First"
import WithParams from "./WithParams"
import FragmentComp from "./FragmentComp"
import RandNum from "./RandNum"
import Card from "./../layout/Card"
import Family from "./Family"
import FamilyMember from './FamilyMember'
import StudentsList from './StudentsList'
import ProductsTable from './ProductsTable'

export default () => {
    return (
        //short way to use Fragment
        <>
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
        </>
    )
}