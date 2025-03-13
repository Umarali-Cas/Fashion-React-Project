import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../../components/redux/ToDoList/CartSlice";

export const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items);

    const total = cart.reduce((sum, item) => sum + item.priceFirst, 0);

    return (
        <section className="cart-section">
            <ul style={{display: "flex", columnGap: "30px"}}>
                {cart.map(item => (
                    <li style={{display: "flex", flexDirection: "column", alignItems: "center"}} key={item.id}>
                        <img src={item.img} alt={item.textName} width="250" />
                        {item.textName} - ${item.priceFirst}
                        <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                    </li>
                ))}
            </ul>
            <h3>Total: ${total}</h3>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </section>
    );
};
