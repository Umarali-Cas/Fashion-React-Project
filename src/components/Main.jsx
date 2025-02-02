import Men1 from "../images/Men1.png"
import Men2 from "../images/Men2.png"
import Men3 from "../images/Men3.png"
import Men4 from "../images/Men4.png"
import woman1 from "../images/8.png"
import woman2 from "../images/9.png"
import woman3 from "../images/6.png"
import woman4 from "../images/7.png"
import firstCard from "../images/first-card.png"
import secondCard from "../images/3.png"
import thirdCard from "../images/4.png"
import fourCard from "../images/5.png"
import { Greeting } from "../Greeting"
import photo from "../images/picture.png"
import photo2 from "../images/photo2.png"
import photo3 from "../images/photo3.png"

const imagesMen = [Men1,Men2,Men3,Men4]
const imagesWomen = [woman1,woman2,woman3,woman4]

export function Main(){
    return(
        <main>
            <section className="hero-section">
                <div className="hero-content">
                    <span>NEW TREND</span>
                    <h1>COLLUSION</h1>
                    <p>An exclusive selection of this season's trends.</p>
                    <div className="hero-buttons">
                        <button>DISCOVER</button>
                        <button>SHOP NOW</button>
                    </div>
                </div>
            </section>
            <section className="cards-section">
                <div className="up">
                <img src={firstCard} alt="first-card"/>
                <div className="down">
                    <img src={secondCard} alt="second-card"/>
                    <img src={thirdCard} alt="third-card"/>
                </div>
                </div>
                <div className="four-card">
                    <img src={fourCard} alt="four" />
                    <button>CATAGORY NAME</button>
                </div>
            </section>
            <section className="women-cards">
                <div className="women-cards-txt">
                <h3>WOMEN’S FASHION</h3>
                <p className="card-txt">Shop our new arrivals from established brands</p>
                </div>
                <div className="cards">
                {imagesWomen.map(img=>{
                        return (
                            <Greeting picture={img} tovarName = "IGURE" textName = "GREEN MUSCLE FIT POLO SHIRT"
                            priceFirst="$229.00" priceSecond = "$129.00"/>
                    )
                })}
                </div>
            </section>
            <section className="men-cards">
                <div className="men-cards-txt">
                <h3>MEN’S FASHION</h3>
                <p className="card-txt">Shop our new arrivals from established brands</p>
                </div>
                <div className="cards">
                {imagesMen.map(img=>{
                        return (
                            <Greeting picture={img} tovarName = "IGURE" textName = "GREEN MUSCLE FIT POLO SHIRT"
                            priceFirst="$229.00" priceSecond = "$129.00"/>
                    )
                })}
                </div>
            </section>
            <section className="any-cards">
            <div className="any-cards-txt">
                <h3>AVONE STYLES</h3>
                <p className="card-txt">Choose Your Favorite Color</p>
                </div>
                <div className="any-cards-box">
                    <img className="left-picture" src={photo} alt="girl" />
                    <div className="any-cards-right">
                        <img className="right-picture" src={photo2} alt="photo2" />
                        <div className="photo-div">
                            <img src={photo3} alt="photo2" />
                            <div className="any-cards-right-txt">
                                <span>SHOW WOMEN’S DRESS</span>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="shop-collection">
                <div className="collection">
                    <span>OWN THE DAY</span>
                    <h1>TACHEN 19</h1>
                    <button>SHOP COLLECTION</button>
                </div>
            </section>
        </main>
    )
}