import search from "./images/search.png"
import heart from "./images/favorite.png"
import cart from "./images/shopping_cart.png"
import { useState } from "react";
const body = document.querySelector("body")

export function Header(){

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
        body.style.overflowY = "hidden"
    };
    const closeModal = () => {
        setIsModalOpen(false);
        body.style.overflowY = "scroll"
    };

    const [isFavoriteOpen, setIsFavoriteOpen] = useState(false);
    const openFavorite = () => {
        setIsFavoriteOpen(true);
        body.style.overflowY = "hidden"
    };
    const closeFavorite = () => {
        setIsFavoriteOpen(false);
        body.style.overflowY = "scroll"
    }


    return (
        <header className="header">
            <section className="header-section">
                <div className="header-container">
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
                        <button id = "search-nav"></button>
                        <button onClick={openFavorite} id = "heart-nav"></button>
                        <button id = "cart-nav"></button>
                    </div>
                    <button onClick={openModal} className="login-main">Login</button>
                </div>
                {isModalOpen ? (
                <div className="container-login">
                    <div className="login-backround">
                        <h1>Login in your Account</h1>
                        <button id="x" onClick={closeModal}>x</button>
                        <hr />
                        <input type="text" placeholder="Enter your Name"/>
                        <input type="text" placeholder="Enter your password"/>
                        <div className={`login-register`}>
                            <button>Login</button>
                            <button id="register">Register</button>
                        </div>
                    </div>
                </div>
                ): null}
                {isFavoriteOpen ? (
                <div className="favorite-modal">
                    <div className ="favorite-backround">
                        <div className="my-favorites"></div>
                        <div className="favorite-back">
                            <hr />
                            <button onClick={closeFavorite}>Back</button>
                        </div>
                    </div>
                </div>
                ) : null}
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