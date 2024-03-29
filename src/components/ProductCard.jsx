import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

export const ProductCard = ({ product, showSaleBadge, showPrice2 }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const handleCartButtonClick = () => {
    if (isAddedToCart) {
      const index = cart.findIndex(item => item.name === product.name);
      if (index !== -1) {
        removeFromCart(index);
      }
    } else {
      addToCart(product);
    }
    setIsAddedToCart(!isAddedToCart);
  }

  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* Sale badge */}
        {showSaleBadge && <div className="badge bg-dark text-white position-absolute">-10%</div>}
        {/* Product image */}
        <img className="card-img-top" src={product.image} alt={product.name} />
        <div className="card-body p-4">
          <div className="text-center">
            {/* Product name */}
            <h5 className="fw-bolder">{product.name}</h5>
            {/* Product price */}
            {product.price && <span>Precio: ${product.price}</span>}
            {showPrice2 && product.name === 'Special Item' && (
              <><span className="text-muted text-decoration-line-through">20.00</span> $18.00</>
            )}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {/* Add to cart button */}
            <button className={`btn ${isAddedToCart ? 'btn-dark text-white' : 'btn-outline-dark'} mt-auto`} onClick={handleCartButtonClick}>
              {isAddedToCart ? 'Quitar Carrito' : 'Agregar Carrito'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
