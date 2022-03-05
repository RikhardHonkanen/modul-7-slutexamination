import '../App.css';
import ViewCart from '../components/ViewCart'
import MenuItem from '../components/MenuItem'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {increment, decrement, initialize} from '../actions/cartActions';
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

    function increase() {
        dispatch(increment(1));
    }

    function decrease() {
        dispatch(decrement(1));
    }    

    const menu = useSelector((state) => {return state.menuItems});
    console.log(menu);
    return (
        <div className='menu'>
            <ViewCart />
            {menu.menu?.map((menuItem) => {
                return (
                    <MenuItem key={menuItem.id}
                        id={menuItem.id}
                        title={menuItem.title}
                        desc={menuItem.desc}
                        price={menuItem.price}
                    />
                )
            })}
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>

            <Link to="/cart">To Cart</Link>
        </div>
    )
}

export default Menu;