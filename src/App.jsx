import { BrowserRouter, Route, RouterProvider, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from "./components/Header";
import { Main } from './components/Main';
import { Shop } from './components/Routes/Shop';
import ScrollToTop from './components/ScrollToTop';
import { ShopMain } from './components/Routes/ShopMain';
import { Cart } from './components/Routes/Cart';
import { useCallback, useState } from 'react';
import { Timer } from './components/Routes/Timer';
import { routes } from './components/Routes/routes';
import "./styles/hero.scss"

function App() {

  // const [cart, setCart] = useState([]);

  // const addToCart = useCallback((product) => {
  //     setCart((prevCart) => [...prevCart, product]);
  // });

  return (
    <div className="App">
        <RouterProvider router={routes} />;
      {/* <BrowserRouter>
      <Header />
        <ScrollToTop />
        <Routes>
          <Route path='/' element = {<Main />}/>
          <Route path='/shop' element = {<ShopMain />}/>
          <Route path='/shop/:id'  element = {<Shop addToCart={addToCart}/>}/>
          <Route path='/lookbook' element = {<h1>LOOKBOOK</h1>}/>
          <Route path='/features' element = {<h1>FEATURES</h1>}/>
          <Route path='/pages' element = {<h1>PAGES</h1>}/>
          <Route path='/blog' element = {<h1>BLOG</h1>}/>
          <Route path='/cart' element = {<Cart cart={cart}/>}/>
          <Route path='/faq/timer' element = {<Timer />}/>
          <Route path='*' element = {<h1>Такой страницы не существует</h1>}/>
        </Routes>
        <Footer />
      </BrowserRouter> */}
    </div>
  );
  
}

export default App;
