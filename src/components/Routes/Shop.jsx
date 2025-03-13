import { useNavigate, useParams } from "react-router-dom";
import { ProductCardMen, ProductCardWomen } from "../../mock/main.mock";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../../components/redux/ToDoList/CartSlice";


export const Shop = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const productMen = ProductCardMen.find(item => item.id === parseInt(id));
    const productWomen = ProductCardWomen.find(item => item.id === parseInt(id));

    if (!productMen && !productWomen) {
        return <div>Продукт не найден</div>;
    }

    const product = productMen || productWomen;

    return (
        <div className="product-container">
            <div className="product-detail">
                <button className="product-detail-back" onClick={() => navigate(-1)}>+</button>
                <img src={product.img} alt={product.tovarName} />
                <h3>{product.tovarName}</h3>
                <p>{product.textName}</p>
                <div className="prices">
                    <span className="price-first">{product.priceFirst}</span>
                    <span className="price-second">{product.priceSecond}</span>
                </div>
                <hr />
            </div>
            <div className="product-info">
                <p className="description">Описание товара...</p>
                <div className="add-to-cart">
                    <button className="buy">Buy</button>
                    <button className="to-cart" onClick={() => dispatch(addToCart(product))}>
                        To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};
