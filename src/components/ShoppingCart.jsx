import React from 'react'

export const ShoppingCart = ({ itemCount}) => {
  return (
    <div className="cart">
      <span>{itemCount}</span>
      <i className="fa fa-shopping-cart"></i>
    </div>
  )
}
