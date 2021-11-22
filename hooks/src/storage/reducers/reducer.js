export const initialState = {
    user: '',
    age: 0
}

export default (state, action) => {
    switch(action.type){
        case 'add1':
            return {...state, age: state.age + 1}
        case 'login':
            return {...state, user: action.payload}
        case 'multiplyBy7':
            return {...state, age: state.age * 7}
        case 'divideBy25':
            return {...state, age: state.age / 25}
        case 'parseInt':
            return {...state, age: Math.round(state.age)}
        case 'addNumber':
            return {...state, age: state.age + action.payload}
        default:
            return state
    }
}