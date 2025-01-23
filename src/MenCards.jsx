import Men1 from "./images/Men1.png"
import Men2 from "./images/Men2.png"
import Men3 from "./images/Men3.png"
import Men4 from "./images/Men4.png"
import { Greeting, GreetingTovar, GreetingPriceFirst} from "./Greeting"

function MenCards(){
    return(
        <section className="men-cards">
            <div className="men-cards-txt">
            <h3>MEN’S FASHION</h3>
            <p className="card-txt">Shop our new arrivals from established brands</p>
            </div>
            <div className="cards">
                <div className="card">
                    <img src={Men1} alt="woman1" />
                    <GreetingTovar tovarName = "IGURE"/>
                    <Greeting textName = "GREEN MUSCLE FIT POLO SHIRT"/>
                    <GreetingPriceFirst priceFirst="$229.00" priceSecond = "$129.00"/>
                </div>
                <div className="card">
                    <img src={Men2} alt="woman1" />
                    <GreetingTovar tovarName = "IGURE"/>
                    <Greeting textName = "GREEN MUSCLE FIT POLO SHIRT"/>
                    <GreetingPriceFirst priceFirst="$229.00" priceSecond = "$129.00"/>
                </div>
                <div className="card">
                    <img src={Men3} alt="woman1" />
                    <GreetingTovar tovarName = "IGURE"/>
                    <Greeting textName = "GREEN MUSCLE FIT POLO SHIRT"/>
                    <GreetingPriceFirst priceFirst="$229.00" priceSecond = "$129.00"/>
                </div>
                <div className="card">
                    <img src={Men4} alt="woman1" />
                    <GreetingTovar tovarName = "IGURE"/>
                    <Greeting textName = "GREEN MUSCLE FIT POLO SHIRT"/>
                    <GreetingPriceFirst priceFirst="$229.00" priceSecond = "$129.00"/>
                </div>
            </div>
        </section>
    )
}

export default MenCards;