import './App.css';
import { useDispatch } from 'react-redux';

import ViewCart from './components/ViewCart'
import {increment, decrement} from './actions/cartActions'

function App() {
  const dispatch = useDispatch();

  function increase() {
    dispatch(increment(1));
  }

  function decrease() {
    dispatch(decrement(1));
  }

  return (
    <div className="App">
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      
      <ViewCart />
    </div>
  );
}

export default App;
