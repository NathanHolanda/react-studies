import React, {Fragment} from 'react'

export default props => {
    return(
        <>
            <label htmlFor="step">Progressão: </label>
            <input type="number" id="step" value={props.jump} onChange={e => props.onChangeStep(+e.target.value)}/>
        </>
    )
}