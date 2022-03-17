import '../App.css';
import ViewCart from '../components/ViewCart'
import MenuItem from '../components/MenuItem'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initialize } from '../actions/cartActions';
import { useSelector } from 'react-redux';
import menuTop from '../assets/graphics/graphics-header.svg';
import menuBottom from '../assets/graphics/graphics-footer.svg';


function Menu() {
    useEffect(() => {
        getMenu();
    }, []);

    const dispatch = useDispatch();

    async function getMenu() {
        let url = "http://localhost:5000/api/beans"
        const response = await fetch(url, {
            method: "GET"
        });
        const apiMenu = await response.json();
        dispatch(initialize(apiMenu));
    }

    const menu = useSelector((state) => { return state.menuItems });
    // Cart should probably be a component instead
    // of a route. Some type of animation when user
    // clicks cart to fade background?

    return (
        <div className='menu'>
            <img src={menuTop} alt='Top image' id='menu-top'></img>
            <Link to="/cart" className='view-cart'>
                <ViewCart />
            </Link>
            <h1 className='menu-header'>Meny</h1>
            <div className='menu-items'>
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
            </div>
            <img src={menuBottom} alt='Bottom image' id='menu-bottom'></img>
        </div>
    )
}

export default Menu;