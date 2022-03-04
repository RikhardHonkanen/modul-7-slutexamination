import '../App.css';
import ViewCart from '../components/ViewCart'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {increment, decrement} from '../actions/cartActions'

function Menu() {
    const dispatch = useDispatch();

    function increase() {
        dispatch(increment(1));
    }

    function decrease() {
        dispatch(decrement(1));
    }

    return (
        <div className='Menu'>
            <ViewCart />
            <h2>List of menu items</h2>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default Menu;