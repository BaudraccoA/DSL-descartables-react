import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CarritoPage } from './pages/CarritoPage';
import { Header } from './components/Header';
import { ComprarPage } from './pages/ComprarPage';
import { PromocionesPage } from './pages/PromocionesPage';
import { ContactoPage } from './pages/ContactoPage';
import { HomePage } from './pages/HomePage';
import { Footer } from './components/Footer';
import "./components/Header.css";
import "./components/PromotionsCarousel.css"
import "./components/Home.css"
import "./components/Footer.css"
import { CartProvider } from './context/CartContext';
import { ProductsPage } from './pages/ProductsPage';



export const App = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  }

  return (
    <CartProvider>
    <Header />
    <div className='container'>
    <Routes>
          <Route path='/home' element={<HomePage />}></Route>
          <Route path='/' element={<ComprarPage agregarAlCarrito={agregarAlCarrito} />}></Route>
          <Route path='/promociones' element={<PromocionesPage />}></Route>
          <Route path='/producto/:productName' element={<ProductsPage agregarAlCarrito={agregarAlCarrito} />}></Route>
          <Route path='/contacto' element={<ContactoPage />}></Route>
          <Route path='/carrito' element={<CarritoPage />}></Route>
          <Route path='/*' element={<Navigate to="/home" />}></Route>
    </Routes>
    </div>
    <Footer />
            
    </CartProvider>
  );
};






