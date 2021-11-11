import React from 'react'
import If, {Else} from './If'

export default props => {
    const user = props.user || {}
    return (
        <>
            <If test={user && user.name}>
                <p>Seja bem-vindo, {user.name}!</p>
                <Else test={!user || !user.name}>
                    <p>Seja bem-vindo, anônimo!</p>
                </Else>
            </If>
        </>
    )
}