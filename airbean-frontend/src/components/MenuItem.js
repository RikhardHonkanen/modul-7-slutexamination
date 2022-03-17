import '../App.css';
import { addToCart } from '../actions/cartActions';
import { useDispatch } from 'react-redux';
import plusSign from '../assets/graphics/add.svg';

function MenuItem({ id, title, desc, price }) {
    const dispatch = useDispatch();

    // Would be better to send whole object here
    function addItemToCart(id) {
        dispatch(addToCart(id));
    }

    return (
        <div className='menu-item'>
            <div className='menu-item-circle' onMouseDown={() => addItemToCart(id)}>
                <img src={plusSign} alt='Plus sign to buy item.' id='plus-sign'></img>
            </div>
            <div className='title-and-dots'>
                <h1 id="title">{title}</h1>
                <div id="dots">&nbsp;</div>
            </div>
            <h2 id="desc">{desc}</h2>
            <h1 id="price">{price} kr</h1>
        </div>
    )
}

export default MenuItem;