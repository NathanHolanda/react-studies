const add1 = dispatch => {
    dispatch({type: 'add1'})
}

const addNumber = (dispatch, number) => {
    dispatch({type: 'addNumber', payload: +number})
}

const divideBy25 = dispatch => {
    dispatch({type: 'divideBy25'})
}

const login = (dispatch, name) => {
    dispatch({type: 'login', payload: name})
}

const multiplyBy7 = dispatch => {
    dispatch({type: 'multiplyBy7'})
}

const parseInt = dispatch => {
    dispatch({type: 'parseInt'})
}

export {
    add1,
    addNumber,
    divideBy25,
    login,
    multiplyBy7,
    parseInt
}