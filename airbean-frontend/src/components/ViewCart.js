import '../App.css';
import {useSelector} from 'react-redux';

function ViewCart() {
    const counter = useSelector((state) => {return state.counter});

  return (
    <div className="cart-component">
        <h1>Count: {counter}</h1>      
    </div>
  );
}

export default ViewCart;