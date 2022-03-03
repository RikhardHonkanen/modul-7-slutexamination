import '../App.css';
import {useSelector} from 'react-redux';

function ViewCart() {
    const counter = useSelector((state) => {return state.counter});

  return (
    <div className="Cart">
        <h1>Count: {counter}</h1>      
    </div>
  );
}

export default ViewCart;