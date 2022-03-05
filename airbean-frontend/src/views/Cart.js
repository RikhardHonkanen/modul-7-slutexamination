import '../App.css';
import ViewCart from '../components/ViewCart'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

function Cart() {
    const menu = useSelector((state) => {return state.menuItems});
    const currentCart = useSelector((state) => {return state.cartItems});

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    
    const uniqueCart = currentCart.filter(onlyUnique);
    let totalPrice = 0;

    return (
        <div className='cart'>
            <ViewCart />
            {uniqueCart.map((cartItem) => {
                const index = menu.menu.findIndex(i => i.id === cartItem);
                let itemAmount = 0;
                function countItems(item) {
                    if (item === cartItem) {
                        itemAmount += 1;
                    }
                }
                currentCart.forEach(countItems);
                totalPrice += itemAmount * menu.menu[index].price;
                
                return (
                    <CartItem key={menu.menu[index].id}
                        id={menu.menu[index].id}
                        title={menu.menu[index].title}
                        amount={itemAmount}
                        price={menu.menu[index].price}
                    />
                )
            })}

            <h1>Total {totalPrice} kr</h1>
            <Link to="/status">Take my money!</Link>
        </div>
    )
}

export default Cart;