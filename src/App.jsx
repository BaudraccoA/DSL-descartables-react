import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CarritoPage } from './pages/CarritoPage';
import { Header } from './components/Header';
import { ComprarPage } from './pages/ComprarPage';
import { PromocionesPage } from './pages/PromocionesPage';
import { ContactoPage } from './pages/ContactoPage';



export const App = () => {
  return (
    <>
    <Header />
    <div className='container'>
    <Routes>
      <Route path='/' element={<ComprarPage />}></Route>
      <Route path='/promociones' element={<PromocionesPage />}></Route>
      <Route path='/contacto' element={<ContactoPage />}></Route>
      <Route path='/carrito' element={<CarritoPage />}></Route>
      <Route path='/*' element={<Navigate to="/" />}></Route>
    </Routes>
    </div>
    </>
  );
};






