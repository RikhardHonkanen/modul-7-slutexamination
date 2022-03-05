import '../App.css';
import {addToCart, removeFromCart} from '../actions/cartActions';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

function MenuItem({id, title, amount, price}) {
    const dispatch = useDispatch();
    const currentCart = useSelector((state) => {return state.cartItems});

    // Would be better to send whole object here
    function addItemToCart(id) {
        dispatch(addToCart(id));
    }

    function removeItemFromCart(id) {
        if (currentCart.includes(id)) {
            const index = currentCart.indexOf(id);
            currentCart.splice(index, 1);
            dispatch(removeFromCart(currentCart));
        }
        return;
    }

    return (
        <div className='menu-item'>
            <button onClick={() => addItemToCart(id)}>+</button>
            <button onClick={() => removeItemFromCart(id)}>-</button>
            <h1 id="title">{title}</h1>
            <h2 id="amount">{amount}</h2>
            <h2 id="price">{price * amount} kr</h2>
        </div>
    )
}

export default MenuItem;