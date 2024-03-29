import React, { createContext, useReducer, useEffect } from 'react';

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, { ...action.payload, quantity: 1 }];
    case 'REMOVE_FROM_CART':
      return state.filter((_, index) => index !== action.payload);
    case 'UPDATE_ITEM_QUANTITY':
      return state.map((item, index) => {
        if (index === action.payload.index) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    const items = cart.map(item => item.name);
    // Actualizar otros estados si es necesario
  }, [cart]);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (index) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: index });
  };

  const updateCartItemQuantity = (index, newQuantity) => {
    dispatch({ type: 'UPDATE_ITEM_QUANTITY', payload: { index, quantity: newQuantity } });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
