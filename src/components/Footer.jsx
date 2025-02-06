import location from "../images/location.png"
import media from "../images/social-media.png"

export function Footer (){
    return (
        <footer>
            <section className="footer-top">
                <div className="footer-top-left">
                    <h3>YOUR LOGO</h3>
                    <p>We earned a reputation of being good at what we do. <br />
                    Let us take your online shop to new dimension in <br />success!</p>
                    <div className="social-location">
                        <img src={location} alt="location" />
                        <span>Comilla, Bangladesh 3500</span>
                    </div>
                    <div className="social-links">
                        <a href="">kawsarahmed0210@gmail.com</a>
                        <hr />
                        <span>01647470457</span>
                    </div>
                    <img src={media} alt="links" />
                </div>
                <div className="footer-top-right">
                    <h3>RECIVE EMAIL UPDATES</h3>
                    <div className="email-input">
                    <input type="text" placeholder="Your Email Address"/>
                    <button>JOIN</button>
                    </div>
                    <div className="links">
                        <ul>
                            <li id="first-txt">SHOP</li>
                            <li><a href="">Shop</a></li>
                            <li><a href="">Collection</a></li>
                            <li><a href="">Outlet</a></li>
                            <li><a href="">Lookbook</a></li>
                        </ul>
                        <ul>
                            <li id="first-txt">HELP</li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Privecy Policy</a></li>
                            <li><a href="">Tearms and conditions</a></li>
                            <li><a href="">Return and Exchanges</a></li>
                        </ul>
                        <ul>
                            <li id="first-txt">ABOUT</li>
                            <li><a href="">Journal</a></li>
                            <li><a href="">Our Story</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Store Location</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="footer-bottom">
                <p>Copyright © 2020 . Your company name  All rights reserved</p>
            </section>
        </footer>
    )
}