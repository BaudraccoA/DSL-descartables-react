import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import './index.css';



const App = () => {
  return (
    <>
      <Header />
      <main>
        <Products />
      </main>
      <ShoppingCart itemCount={0} />
    </>
  );
}

export default App;