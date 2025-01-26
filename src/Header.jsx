import search from "./images/search.png"
import heart from "./images/favorite.png"
import cart from "./images/shopping_cart.png"

export function Header(){
    return (
        <header className="header">
            <section className="header-section">
                <h2 className="logo">YOUR LOGO</h2>
                <ul className="nav">
                    <li>HOME</li>
                    <li>SHOP</li>
                    <li>LOOKBOOK</li>
                    <li>FEATURES</li>
                    <li>PAGES</li>
                    <li>BLOG</li>
                </ul>
                <div className="menu">
                    <img src={search} alt="search" />
                    <img src={heart} alt="heart" />
                    <img src={cart} alt="cart" />
                </div>
            </section>
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
        </header>
    )    
}