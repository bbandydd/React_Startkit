const initialState = {
    number: 0
}

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                number: state.number + action.number
            }
        case 'DECREMENT':
            return {
                ...state,
                number: state.number - action.number
            }
        default: 
            return state;
    }
}

export default counterReducer;