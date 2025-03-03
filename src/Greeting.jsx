import { useReducer, useState } from "react"
import { Link } from "react-router-dom";

export const Greeting = ({ picture, textName, tovarName, priceFirst, priceSecond, productId}) => {

    // const [count, setCount] = useState(0);

    // const reduceProduct = () => {
    //     if (count === 0) return;

    //     setCount((prev) => prev - 1)
    // }

    const initialState = { value: 0, history: [0] };

    const reducer = (state, action) => {
      switch (action.type) {
        case "increment":
          return {
            value: state.value + 1,
            history: [...state.history, state.value + 1],
          };
          case "Decrement":
            if (state.value > 0) {
              return {
                value: state.value - 1,
                history: [...state.history, state.value - 1],
              };
            }
            return state;
          default:
            return state;
    };
};
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.history.join(", "));
  

    return (
        <div className="card">
            {<Link className="link-card" key={productId} to={`/shop/${productId}`}>
                {<img src={picture} alt={picture} />}
            </Link>}
            {/* <img src={picture} alt={picture} onClick={clicked}/> */}
            <p>{textName}</p>
            <span>{tovarName}</span>
            <span className="span-in-span">{priceFirst} <span>{priceSecond}</span></span>
            <div className="counter">
                <button onClick={() => dispatch({ type: "Decrement" })} disabled={state.value === 0} className="minus">-</button>
                <span className="zero">{state.value}</span>
                <button onClick={() => dispatch({ type: "increment" })}  className="plus">+</button>
            </div>
        </div>
    )
}