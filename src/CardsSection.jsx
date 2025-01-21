import firstCard from "./images/first-card.png"
import secondCard from "./images/3.png"
import thirdCard from "./images/4.png"
import fourCard from "./images/5.png"
import WomanCards from "./WomenCards"
import MenCards from "./MenCards"
function CardSection (){
    return(
        <main>
            <section className="cards-section">
                <div className="up">
                <img src={firstCard} alt="first-card"/>
                <div className="down">
                    <img src={secondCard} alt="second-card"/>
                    <img src={thirdCard} alt="third-card"/>
                </div>
                </div>
                <div className="four-card"><img src={fourCard} alt="four"/><button>CATAGORY NAME</button></div>
            </section>
            <WomanCards />
            <MenCards />
        </main>
    )
}

export default CardSection;