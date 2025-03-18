import { useEffect, useState } from "react";
import { Greeting } from "../../Greeting";

export const ShopMain = () => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);

  useEffect(() => {
    fetch(`http://localhost:3001/products?_page=${currentPage}&_limit=${itemsPerPage}`)
      .then(response => {
        const total = Number(response.headers.get('X-Total-Count'));
        setTotalProducts(total);
        return response.json();
      })
      .then(data => {
        setProducts(data);
      })
      .catch(error => console.error("Ошибка загрузки данных:", error));
  }, [currentPage, itemsPerPage]);

  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  return (
    <section className="main-cards-section">
        <div className="filter-input">
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
        <div className="main-cards">
            {products.length === 0 ? (
                <p>Нет товаров для отображения</p>
            ) : (
                products.map((product) => (
                    <Greeting
                        key={product.id}
                        productId={product.id}
                        picture={product.img}
                        tovarName={product.tovarName}
                        textName={product.textName}
                        priceFirst={product.priceFirst}
                        priceSecond={product.priceSecond}
                    />
                ))
            )}
        </div>

        {totalProducts > itemsPerPage && (
            <div className="pagination">
                {Array.from({ length: Math.ceil(totalProducts / itemsPerPage) }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={index + 1 === currentPage ? "active" : ""}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        )}
    </section>
);

};
