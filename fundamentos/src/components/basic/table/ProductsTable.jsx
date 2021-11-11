import React from 'react'
import products from '../../../data/products'
import '../../style/productsTable.css'

const rows = products.map(product => {
    const { id, name, price } = product
    const formatedPrice = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price))
    return (
        <tr key={id}>
            <td>{id + 1}</td>
            <td>{name}</td>
            <td>{`R$ ${formatedPrice}`}</td>
        </tr>
    )
})

export default () =>
    <table>
        <thead>
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Preço</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>

