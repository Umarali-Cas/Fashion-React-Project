import { useMemo, useState } from "react";
import { Greeting } from "../../Greeting"
import { ProductCardMen, ProductCardWomen } from "../../mock/main.mock"

export const ShopMain = () => {

    // const [searchTerm, setSearchTerm] = useState(""); 

    // const filteredWomen = ProductCardWomen.filter(product =>
    //     product.tovarName.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    // const filteredMen = ProductCardMen.filter(product =>
    //     product.tovarName.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    const [searchTerm, setSearchTerm] = useState("");

    const filteredWomen = useMemo(() => {
        return ProductCardWomen.filter(product =>
            product.tovarName.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, ProductCardWomen]);

    const filteredMen = useMemo(() => {
        return ProductCardMen.filter(product =>
            product.tovarName.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, ProductCardMen]);


    return(
        <section className="main-cards-section">
            <div className="filter-input">
                <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>
            <div className="main-cards">
            {filteredWomen.map(product => {
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
            {filteredMen.map(product => {
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