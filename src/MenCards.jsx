import Men1 from "./images/Men1.png"
import Men2 from "./images/Men2.png"
import Men3 from "./images/Men3.png"
import Men4 from "./images/Men4.png"

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
                    <span className="gray-txt">IGURE</span>
                    <p>GREEN MUSCLE FIT POLO SHIRT</p>
                    <span className="span-in-span">$229.00<span>$129.00</span></span>
                </div>
                <div className="card">
                    <img src={Men2} alt="woman1" />
                    <span className="gray-txt">IGURE</span>
                    <p>GREEN MUSCLE FIT POLO SHIRT</p>
                    <span className="span-in-span">$229.00<span>$129.00</span></span>
                </div>
                <div className="card">
                    <img src={Men3} alt="woman1" />
                    <span className="gray-txt">IGURE</span>
                    <p>GREEN MUSCLE FIT POLO SHIRT</p>
                    <span className="span-in-span">$229.00<span>$129.00</span></span>
                </div>
                <div className="card">
                    <img src={Men4} alt="woman1" />
                    <span className="gray-txt">IGURE</span>
                    <p>GREEN MUSCLE FIT POLO SHIRT</p>
                    <span className="span-in-span">$229.00<span>$129.00</span></span>
                </div>
            </div>
        </section>
    )
}

export default MenCards;