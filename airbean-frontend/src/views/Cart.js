import '../App.css';
import ViewCart from '../components/ViewCart'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Cart() {
    const menu = useSelector((state) => { return state.menuItems });
    const currentCart = useSelector((state) => { return state.cartItems });

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    // This function can probably be improved a lot
    function findDiscounts() {
        const coffeeIndex = menu.menu.findIndex(i => i.title === "Bryggkaffe");
        const coffeeId = menu.menu[coffeeIndex].id;
        const pastryIndex = menu.menu.findIndex(i => i.title === "Gustav Adolfsbakelse");
        const pastryId = menu.menu[pastryIndex].id;

        if (currentCart.includes(coffeeId) && currentCart.includes(pastryId)) {
            let coffeeAmount = 0;
            let pastryAmount = 0;

            function countCoffee(item) {
                if (item === coffeeId) {
                    coffeeAmount += 1;
                }
            }
            function countPastry(item) {
                if (item === pastryId) {
                    pastryAmount += 1;
                }
            }
            currentCart.forEach(countCoffee);
            currentCart.forEach(countPastry);

            if (coffeeAmount > pastryAmount) {
                discount = pastryAmount * 49;
            }
            else {
                discount = coffeeAmount * 49;
            }

            return discount;
        }
    }

    const uniqueCart = currentCart.filter(onlyUnique);
    let totalPrice = 0;
    let discount = 0;

    return (
        <div className='cart'>
            <ViewCart className='view-cart' />
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
                discount = findDiscounts();

                return (
                    <CartItem key={menu.menu[index].id}
                        id={menu.menu[index].id}
                        title={menu.menu[index].title}
                        amount={itemAmount}
                        price={menu.menu[index].price}
                    />
                )
            })}
            <h1>Total {totalPrice - discount} kr</h1>
            <Link to="/status">Take my money!</Link>
        </div>
    )
}

export default Cart;