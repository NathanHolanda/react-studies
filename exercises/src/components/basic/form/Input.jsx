import React, {useState} from 'react'

export default () => {
    const [value, setValue] = useState('Valor inicial')

    function changeValue(e){
        setValue(e.target.value)
    }

    const labelStyle = {
        fontSize: '16px',
        display: 'inline-block',
        marginTop: '6px',
        marginBottom: '2px'
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <label style={labelStyle}>Alterável: </label>
            <input value={value} onChange={changeValue} />
            <label style={labelStyle}>Apenas leitura:</label>
            <input value={value} readOnly />
            <label style={labelStyle}>Não controlado:</label>
            <input value={undefined} />
        </div>
    )
}