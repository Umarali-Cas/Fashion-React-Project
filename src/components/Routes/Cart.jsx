import { Link } from "react-router-dom";

export const Cart = ({ cart = [] }) => {
    return (
        <section className="cart-section">
            <div className="cart-tovar-container">
                <h2>Корзина</h2>
                {cart.length === 0 ? (
                    <p>Корзина пуста. <Link to="/">Вернуться в магазин</Link></p>
                ) : <div className="cart-tovars">
                    {cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.img} alt={item.tovarName} />
                            <h3>{item.tovarName}</h3>
                            <p>{item.priceFirst}</p>
                            <button style={{width: "125px", height: "35px", marginBottom: "5px", borderRadius: "8px", background: "green", color: "white", border: "none"}}>Buy</button>
                        </div>
                    ))}
                </div>
                }
            </div>
        </section>
    );
};