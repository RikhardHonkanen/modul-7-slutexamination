import '../App.css';
import { useSelector } from 'react-redux';
import bagImage from '../assets/graphics/bag.svg'

function ViewCart() {
  const counter = useSelector((state) => { return state.cartItems.length });

  return (
    <div className="cart-component">
      <div className='circle-with-bag'>
        <img src={bagImage} alt='Stylized image of a bag.' id='bag-image'></img>
      </div>
      <div className='circle-counter'> {counter}</div>
    </div>
  );
}

export default ViewCart;