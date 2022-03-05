const initialState = {
    cartItems: [],
    counter: 0
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INITIALIZE':
            return {
                ...state,
                cartItems: action.payload,
                counter: state.counter
            }
        // case 'INCREMENT':
        //     return {
        //         ...state,
        //         counter: state.counter + action.payload
        //     }
        // case 'DECREMENT':
        //     return {
        //         ...state,
        //         counter: state.counter - action.payload
        //     }
        default:
            return state;
    }
}

export default cartReducer;