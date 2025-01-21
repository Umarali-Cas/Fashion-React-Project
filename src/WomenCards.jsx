import woman1 from "./images/8.png"
import woman2 from "./images/9.png"
import woman3 from "./images/6.png"
import woman4 from "./images/7.png"


function WomanCards (){
    return(
        <section className="women-cards">
            <div className="women-cards-txt">
            <h3>WOMEN’S FASHION</h3>
            <p className="card-txt">Shop our new arrivals from established brands</p>
            </div>
            <div className="cards">
                <div className="card">
                    <img src={woman1} alt="woman1" />
                    <span className="gray-txt">IGURE</span>
                    <p>GREEN MUSCLE FIT POLO SHIRT</p>
                    <span className="span-in-span">$229.00<span>$129.00</span></span>
                </div>
                <div className="card">
                    <img src={woman2} alt="woman1" />
                    <span className="gray-txt">IGURE</span>
                    <p>GREEN MUSCLE FIT POLO SHIRT</p>
                    <span className="span-in-span">$229.00<span>$129.00</span></span>
                </div>
                <div className="card">
                    <img src={woman3} alt="woman1" />
                    <span className="gray-txt">IGURE</span>
                    <p>GREEN MUSCLE FIT POLO SHIRT</p>
                    <span className="span-in-span">$229.00<span>$129.00</span></span>
                </div>
                <div className="card">
                    <img src={woman4} alt="woman1" />
                    <span className="gray-txt">IGURE</span>
                    <p>GREEN MUSCLE FIT POLO SHIRT</p>
                    <span className="span-in-span">$229.00<span>$129.00</span></span>
                </div>
            </div>
        </section>
    )
}

export default WomanCards;