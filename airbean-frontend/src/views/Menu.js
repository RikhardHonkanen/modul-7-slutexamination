import '../App.css';
import ViewCart from '../components/ViewCart'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {increment, decrement} from '../actions/cartActions'

function Menu() {
    useEffect(() => {
        getMenu();
    }, []);

    const dispatch = useDispatch();

    function increase() {
        dispatch(increment(1));
    }

    function decrease() {
        dispatch(decrement(1));
    }

    async function getMenu() {
        let url = "http://localhost:5000/api/beans"
        const menu = await fetch (url, {
            method:"GET"
        });
        console.log(menu);
    }

    return (
        <div className='Menu'>
            <ViewCart />
            <h2>List of menu items</h2>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>

            <Link to="/cart">To Cart</Link>
        </div>
    )
}

export default Menu;