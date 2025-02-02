import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from "./components/Header";
import { Main } from './components/Main';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element = {<Main />}/>
          <Route path='/shop' element = {<h1>SHOP</h1>}/>
          <Route path='/lookbook' element = {<h1>LOOKBOOK</h1>}/>
          <Route path='/features' element = {<h1>FEATURES</h1>}/>
          <Route path='/pages' element = {<h1>PAGES</h1>}/>
          <Route path='/blog' element = {<h1>BLOG</h1>}/>
          <Route path='*' element = {<h1>Такой страницы не существует</h1>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
  
}

export default App;
