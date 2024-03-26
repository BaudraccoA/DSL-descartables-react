
import React from 'react';
import { ProductCard } from '../components/ProductCard';

const products = [
  { 
    name: 'Fancy Product',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    price: '40.00 - $80.00'
  },
  { 
    name: 'Fancy Product',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    price: '40.00 - $80.00'
  },
  { 
    name: 'Fancy Product',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    price: '40.00 - $80.00'
  },
  { 
    name: 'Fancy Product',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    price: '40.00 - $80.00'
  },
  // Agrega los demás productos aquí con sus respectivas propiedades
];

export const ComprarPage = () => {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
