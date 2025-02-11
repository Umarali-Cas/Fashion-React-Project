import search from "../images/search.png"
import heart from "../images/favorite.png"
import cart from "../images/shopping_cart.png"
import { Children, useEffect, useState } from "react";
import {Modal} from "./Modals/Modal";
import { FavoriteModal } from "../FavoriteModal";
import { BrowserRouter, NavLink, Route, Router, Routes, useLocation } from "react-router-dom";

const body = document.querySelector("body")

export function Header(){

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false);
      };
    

    // const [isFavoriteOpen, setIsFavoriteOpen] = useState(false);
    // const openFavorite = () => {
    //     setIsFavoriteOpen(true);
    // };
    // const closeFavorite = () => {
    //     setIsFavoriteOpen(false);
    // }

    const routes = [
        {
            path: "./",
            title: "HOME"
        },
        {
            path: "./shop",
            title: "SHOP"
        },
        {
            path: "./lookbook",
            title: "LOOKBOOK"
        },
        {
            path: "./features",
            title: "FEATURES"
        },
        {
            path: "./pages",
            title: "PAGES"
        },
        {
            path: "./blog",
            title: "BLOG"
        },
    ];

    const navList = [
        {
            path: "",
            bg: search,
            id: 1,
        },
        {
            path: "",
            bg: heart,
            id: 2,
        },
        {
            path: "/cart",
            bg: cart,
            id: 3,
        },
    ]

    return (
        <header className="header">
            <section className="header-section">
                <div className="header-container">
                    <h2 className="logo">YOUR LOGO</h2>
                    <nav className="nav">
                            {routes.map((item, index) => (
                            <NavLink key={index} to={item.path} className={({isActive}) => (isActive ? "active-link link" : "link")}>
                                {item.title}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="menu">
                        {navList.map((item) => (
                            <NavLink className="nav-icons" key={item.id} to={item.path}>
                                <img className="nav-icons-img" src={item.bg} alt={item.bg} />
                            </NavLink>
                        ))}
                        {/* <button id = "search-nav"></button>
                        <button id = "heart-nav"></button> */}
                        {/* <button id = "cart-nav"></button> */}
                        {/* <NavLink className={"cart-nav"}><img src={cart}></img></NavLink> */}
                    </div>
                    <button onClick={openModal} className="login-main" id="login-btn">Login</button>
                </div>
                {isModalOpen ? (
                    <Modal onClose={closeModal} />
                ) : null}

                {/* {isFavoriteOpen ? (
                    <FavoriteModal onCloseFavorite = {closeFavorite}/>
                ) : null} */}
            </section>
        </header>
    )    
}