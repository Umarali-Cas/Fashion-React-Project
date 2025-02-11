import { useNavigate, useParams } from "react-router-dom"
import { ProductCardMen, ProductCardWomen } from "../../mock/main.mock";


export const Shop = ({addToCart}) => {
    
    const navigate = useNavigate()
    const { id } = useParams();
    const productMen = ProductCardMen.find(item => item.id === parseInt(id));
    const productWomen = ProductCardWomen.find(item => item.id === parseInt(id));
  
    if (!productMen && !productWomen) {
      return <div>Продукт не найден</div>;
    }

    const product = productMen || productWomen;
 
    return(
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
                <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate modi totam ab ex et earum enim sequi, saepe quis placeat eligendi quisquam, id fugit in.</p>
                <div className="add-to-cart">
                    <button className="buy">Buy</button>
                    <button className="to-cart" onClick={() => addToCart(product)}>To Cart</button>
                </div>
            </div>
        </div>
        )
}