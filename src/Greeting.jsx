import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Greeting = ({ picture, textName, tovarName, priceFirst, priceSecond, key }) => {

    const [count, setCount] = useState(0);

    const reduceProduct = () => {
        if (count === 0) return;

        setCount((prev) => prev - 1)
    }

    const redirect = useNavigate()

    return (
        <div className="card">
            <img src={picture} alt={picture} />
            <p>{textName}</p>
            <span>{tovarName}</span>
            <span className="span-in-span">{priceFirst} <span>{priceSecond}</span></span>
            <div className="counter">
                <button onClick={reduceProduct} className="minus">-</button>
                <span className="zero">{count}</span>
                <button onClick={() => setCount((prev) => prev + 1)} className="plus">+</button>
            </div>
        </div>
    )
}