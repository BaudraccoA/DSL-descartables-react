import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';



const products = [
  { 
    id: "1", 
    name: 'precorte',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    price: '80.00',
    detail: 'This is the detail for Fancy Product 1.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    id: "2", 
    name: 'papel',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    price: '80.00',
    detail: 'This is the detail for Fancy Product 2.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    id: "3", 
    name: 'carton',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    price: '50.00',
    detail: 'This is the detail for Fancy Product 3.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    id: "4", 
    name: 'consorcio',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    price: '10.00',
    detail: 'This is the detail for Fancy Product 4.',
    showSaleBadge: false,
    showPrice2: false,
  },
];

export const ProductsPage = ({ agregarAlCarrito }) => {
  const { productName } = useParams(); // Obtener el ID del producto de los parámetros de la URL

  // Si hay un productId en la URL, buscar el producto correspondiente
  const product = productName ? products.find(product => product.name === productName) : null;

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {product && (
            <div className="col mb-5">
              <ProductCard 
                product={product}
                detail={product.detail} // Pasando el detalle del producto al componente ProductCard 
                showSaleBadge={product.showSaleBadge} 
                showPrice2={product.showPrice2}
                agregarAlCarrito={agregarAlCarrito} 
              />
            </div>
          )}
          {!product && <div>Producto no encontrado</div>}
        </div>
      </div>
    </section>
  );
};