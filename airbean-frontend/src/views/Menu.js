import '../App.css';
import ViewCart from '../components/ViewCart'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import {increment, decrement, initialize} from '../actions/cartActions';
import {initialize} from '../actions/cartActions';
import {useSelector} from 'react-redux';

function Menu() {
    useEffect(() => {
        getMenu();
    }, []);

    const dispatch = useDispatch();

    async function getMenu() {
        let url = "http://localhost:5000/api/beans"
        const response = await fetch (url, {
            method:"GET"
        });
        const apiMenu = await response.json();
        dispatch(initialize(apiMenu));
    }    

    function initializeStore() {

    }

    // function increase() {
    //     dispatch(increment(1));
    // }

    // function decrease() {
    //     dispatch(decrement(1));
    // }
    

    return (
        <div className='menu'>
            <ViewCart />
            <h2>List of menu items</h2>
            {/* <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button> */}

            <Link to="/cart">To Cart</Link>
        </div>
    )
}

export default Menu;