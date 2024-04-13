import React from 'react';
import { Link } from 'react-router-dom';


export const ListaDeProductos = ({ productos }) => {
  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            <Link to={`/producto/${producto.id}`}>{producto.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


