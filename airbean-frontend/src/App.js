import './App.css';
import {Routes, Route} from 'react-router-dom';
import Landing from './views/Landing'
import Menu from './views/Menu'
import Cart from './views/Cart'
import Status from './views/Status'


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Landing />} exact />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/status" element={<Status />} />
      </Routes>
    </div>
  );
}

export default App;
