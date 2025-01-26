export const Greeting = ({picture,textName,tovarName,priceFirst,priceSecond}) => {    
    return (
        <div className="card">
            <img src={picture} alt={picture} />
            <p>{textName}</p>
            <span>{tovarName}</span>
            <span className="span-in-span">{priceFirst} <span>{priceSecond}</span></span>
        </div>
)}