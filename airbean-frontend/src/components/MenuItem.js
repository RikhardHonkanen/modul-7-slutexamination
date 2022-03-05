import '../App.css';
import {addToCart} from '../actions/cartActions';
import { useDispatch } from 'react-redux';

function MenuItem({id, title, desc, price}) {
    const dispatch = useDispatch();

    // Would be better to send whole object here
    function addItemToCart(id) {
        dispatch(addToCart(id));
    }

    return (
        <div className='menu-item'>
            <button onClick={() => addItemToCart(id)}>+</button>
            <h1 id="title">{title}</h1>
            <h1 id="price">{price} kr</h1>
            <h2 id="desc">{desc}</h2>
        </div>
    )
}

export default MenuItem;