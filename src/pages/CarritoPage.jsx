import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';

export const CarritoPage = () => {
  const { cart, removeFromCart, updateCartItemQuantity } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  const handleQuantityChange = (index, newQuantity, price) => {
    updateCartItemQuantity(index, newQuantity);
  };

  useEffect(() => {
    // Calcula el total cada vez que cambie el carrito
    const newTotal = cart.reduce((acc, product) => acc + (product.quantity * product.price), 0);
    setTotal(newTotal);
  }, [cart]);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-outline-primary btn-sm me-1"
                    onClick={() => handleQuantityChange(index, product.quantity - 1, product.price)}
                    disabled={product.quantity === 1} // Deshabilitar el botón si la cantidad es 1
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    className="btn btn-outline-primary btn-sm ms-1"
                    onClick={() => handleQuantityChange(index, product.quantity + 1, product.price)}
                  >
                    +
                  </button>
                </div>
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => removeFromCart(index)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <strong>Total: {total}</strong>
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-primary">Comprar</button>
      </div>
    </>
  );
};
