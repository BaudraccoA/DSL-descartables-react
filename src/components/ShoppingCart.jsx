import React from 'react';

const ShoppingCart = ({ itemCount }) => {
  return (
    <div className="cart">
      <span>{itemCount}</span>
      <i className="fa fa-shopping-cart"></i>
    </div>
  );
}

export default ShoppingCart;