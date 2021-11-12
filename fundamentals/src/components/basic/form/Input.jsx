import React, {useState} from 'react'

export default () => {
    const [value, setValue] = useState('Valor inicial')

    function changeValue(e){
        setValue(e.target.value)
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <input value={value} onChange={changeValue} />
            <input value={value} readOnly />
            <input value={undefined} />
        </div>
    )
}