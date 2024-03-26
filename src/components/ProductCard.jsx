
import React from 'react';

export const ProductCard = ({ product }) => {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* Product image */}
        <img className="card-img-top" src={product.image} alt={product.name} />
        <div className="card-body p-4">
          <div className="text-center">
            {/* Product name */}
            <h5 className="fw-bolder">{product.name}</h5>
            {/* Product price */}
            <span>Precio: ${product.price}</span>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {/* Add to cart button */}
            <button className="btn btn-outline-dark mt-auto">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

