export const Greeting = ({textName}) => {    
    return <p>{textName}</p>
}

export const GreetingTovar = ({tovarName}) => {
    return <span>{tovarName}</span>
}

export const GreetingPriceFirst = ({priceFirst, priceSecond}) => {
    return <span className="span-in-span">{priceFirst} <span>{priceSecond}</span></span>
}