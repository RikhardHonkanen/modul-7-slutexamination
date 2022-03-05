export const initialize = (apiMenu) => {
    return {
        type: 'INITIALIZE',
        payload: apiMenu
    }
}

export const addToCart = (menuItem) => {
    return {
        type: 'ADDTOCART',
        payload: menuItem
    }
}

export const removeFromCart = (currentCart) => {
    return {
        type: 'REMOVEFROMCART',
        payload: currentCart
    }
}

export const increment = (count) => {
    return {
        type: 'INCREMENT',
        payload: count
    }
}

export const decrement = (count) => {
    return {
        type: 'DECREMENT',
        payload: count
    }
}