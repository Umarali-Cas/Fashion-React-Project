import { Greeting } from "../../Greeting"
import { ProductCardWomen } from "../../mock/main.mock"


export const ShopMain = () => {
    return(
        <section className="main-cards-section">
            <div className="main-cards">
            {ProductCardWomen.map(product => {
                return (
                    <Greeting 
                            productId={product.id}
                            picture={product.img} 
                            tovarName={product.tovarName}
                            textName={product.textName}
                            priceFirst={product.priceFirst}
                            priceSecond={product.priceSecond}
                        />
                )
            })}
            </div>
        </section>
    )
}