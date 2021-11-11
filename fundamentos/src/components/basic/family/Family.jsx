import React, {cloneElement} from 'react'

export default props => {
    return (
        <div>
            {/* only one element */}
            {/* {React.cloneElement(props.children, props)} */}

            {/* {
                React.Children.map(props.children, child => {
                    return cloneElement(child, props)
                })
            } */}

            {
                props.children.map((child, key) => {
                    return cloneElement(child, {...props, key})
                })
            }
        </div>
    )
}