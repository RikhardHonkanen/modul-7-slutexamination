import '../App.css';
import ViewCart from '../components/ViewCart'
import { useDispatch } from 'react-redux';
import {increment, decrement} from '../actions/cartActions'

function Cart() {
    const dispatch = useDispatch();

    function increase() {
        dispatch(increment(1));
    }

    function decrease() {
        dispatch(decrement(1));
    }

    return (
        <div className='Cart'>
            <ViewCart />
            <h2>Display/edit cart and send order</h2>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default Cart;