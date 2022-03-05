const initialState = {
    menuItems: [],
    cartItems: [],
    counter: 0
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INITIALIZE':
            return {
                ...state,
                menuItems: action.payload,
                cartItems: state.cartItems,
                counter: state.counter
            }
        case 'ADDTOCART':
            return {
                ...state,
                menuItems: state.menuItems,
                cartItems: [...state.cartItems, action.payload],
                counter: state.counter
            }
        case 'REMOVEFROMCART':
            return {
                ...state,
                menuItems: state.menuItems,
                cartItems: [...action.payload],
                counter: state.counter
            }
        case 'INCREMENT':
            return {
                ...state,
                menuItems: state.menuItems,
                cartItems: state.cartItems,
                counter: state.counter + action.payload
            }
        case 'DECREMENT':
            return {
                ...state,
                menuItems: state.menuItems,
                cartItems: state.cartItems,
                counter: state.counter - action.payload
            }
        default:
            return state;
    }
}

export default cartReducer;