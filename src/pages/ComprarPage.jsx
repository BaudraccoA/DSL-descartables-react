import React from 'react';
import { ProductCard } from '../components/ProductCard';


const products = [
  { 
    name: 'Bolsas de Precorte',
    image: 'src/assets/00032405023bolsas-polietileno.jpg',
    price: '2800.00',
    detail: 'Rollo mundi 20x30cm x 600 grs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Precorte',
    image: 'src/assets/00032405023bolsas-polietileno.jpg',
    price: '2800.00',
    detail: 'Rollo mundi 25x35 x 600 grs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Precorte',
    image: 'src/assets/00032405023bolsas-polietileno.jpg',
    price: '2800.00',
    detail: 'Rollo mundi 30x40 x 600 grs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Precorte',
    image: 'src/assets/00032405023bolsas-polietileno.jpg',
    price: '2800.00',
    detail: 'Rollo mundi 40x50 x 600 grs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Precorte',
    image: 'src/assets/00032405023bolsas-polietileno.jpg',
    price: '2700.00',
    detail: 'Rollo RH 20x30 x 600 grs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Precorte',
    image: 'src/assets/00032405023bolsas-polietileno.jpg',
    price: '2700.00',
    detail: 'Rollo RH 25x35 x 600 grs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Precorte',
    image: 'src/assets/00032405023bolsas-polietileno.jpg',
    price: '2700.00',
    detail: 'Rollo RH 30x40 x 600 grs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Precorte',
    image: 'src/assets/00032405023bolsas-polietileno.jpg',
    price: '2700.00',
    detail: 'Rollo RH 35x45 x 600 grs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Precorte',
    image: 'src/assets/00032405023bolsas-polietileno.jpg',
    price: '2700.00',
    detail: 'Rollo RH 40x50 x 600 grs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Fancy Product',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    price: '40.00',
    detail: 'This is the detail for Fancy Product 4.',
    showSaleBadge: true,
    showPrice2: false,
  },
  {
    name: 'Sale Item',
    image: 'https://dummyimage.com/450x300/ff6f61/ffffff.png&text=SALE',
    price: '30.00',
    detail: 'This is the detail for Fancy Product 5.',
    showSaleBadge: false,
    showPrice2: false,
  },
  {
    name: 'Sale Item',
    image: 'https://dummyimage.com/450x300/ff6f61/ffffff.png&text=SALE',
    price: '30.00',
    detail: 'This is the detail for Fancy Product 6.',
    showSaleBadge: false,
    showPrice2: false,
  },
  {
    name: 'Sale Item',
    image: 'https://dummyimage.com/450x300/ff6f61/ffffff.png&text=SALE',
    price: '30.00',
    detail: 'This is the detail for Fancy Product 7.',
    showSaleBadge: false,
    showPrice2: false,
  },
  {
    name: 'Popular Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    price: '40',
    showSaleBadge: true,
    showPrice2: false,
  },
  {
    name: 'Popular Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    price: '40',
    showSaleBadge: true,
    showPrice2: false,
  },
  {
    name: 'Popular Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    price: '40',
    showSaleBadge: true,
    showPrice2: false,
  },
  {
    name: 'Special Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    showSaleBadge: true,
    showPrice2: true,
  },
  {
    name: 'Special Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    showSaleBadge: true,
    showPrice2: true,
  },
  {
    name: 'Special Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    showSaleBadge: true,
    showPrice2: true,
  },
  {
    name: 'Special Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    showSaleBadge: true,
    showPrice2: true,
  },
  {
    name: 'Special Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    showSaleBadge: true,
    showPrice2: true,
  },
  {
    name: 'Special Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    showSaleBadge: true,
    showPrice2: true,
  },

  // Agrega los demás productos aquí con sus respectivas propiedades
];

export const ComprarPage = ({ agregarAlCarrito }) => {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product, index) => (
            <ProductCard 
            key={index} 
            product={product}
            detail={product.detail} // Pasando el detalle del producto al componente ProductCard 
            showSaleBadge={product.showSaleBadge} 
            showPrice2={product.showPrice2}
            agregarAlCarrito={agregarAlCarrito} />
          ))}
        </div>
      </div>
    </section>
  );
};

