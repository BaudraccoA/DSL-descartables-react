import React, { useEffect, useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { images } from '../utils/ImportImages';

export const ComprarPage = ({ agregarAlCarrito }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/products.json') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Productos obtenidos:', data);
        const productsWithImages = data.map(product => ({
          ...product,
          image: images[product.image] || product.image
        }));
        console.log('Productos con imágenes:', productsWithImages);
        setProducts(productsWithImages);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);


  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              agregarAlCarrito={agregarAlCarrito} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};


//carga manual de imagenes, primera parte del proyecto: 
/*import React from 'react';
import { ProductCard } from '../components/ProductCard';
import bolsa1 from '../assets/00032405023bolsas-polietileno.jpg';
import bolsa2 from '../assets/bolsa-de-plastico-polietileno-en-rollo-1.jpg';
import bolsa3 from '../assets/bolsas-de-polietileno-natural.jpg';
import bolsa4 from '../assets/bolsa-de-plastico-polietileno-alta-densidad.jpg'; 
import bolsa5 from '../assets/bolsa-de-plastico-tipo-camiseta-1.jpg';
import bolsa6 from '../assets/Bolsas-camisetas.jpg';
import folex1 from '../assets/camisetas.jpg';
import folex2 from '../assets/lamina-folex.png';
import folex3 from '../assets/folex son buenas.jpg';
import residuo from '../assets/bolsa-negra-01.jpg';
import especial1 from '../assets/leña.jpg';
import especial2 from '../assets/bolsas para horno.jpg';
import emblocada from '../assets/Emblocadas.jpg';
import rendidor from '../assets/rollos rendidor.jpg';
import poli from '../assets/polipropileno.jpg';
import rinon from '../assets/rinon.jpg';
import papel1 from '../assets/bolsaspapel.jpg';
import caja from '../assets/caja masas.jpg';
import caja1 from '../assets/cajas tortas cartulina.jpg';
import caja2 from '../assets/caja-pizza.png';
import caja3 from '../assets/caja-pizza-oct.jpg';
import caja4 from '../assets/caja-pizza-micro.jpg';
import caja5 from '../assets/caja-lomo.jpg';
import caja6 from '../assets/caja-empanadas.jpeg';
import caja7 from '../assets/caja-media.jpg';
import caja8 from '../assets/cono-papas.jpeg';
import carton from '../assets/bandeja-de-carton.jpg';
import carton1 from '../assets/bandeja-carton1.jpg';
import carton2 from '../assets/redondas-doradas.jpg';
import papel from '../assets/papel-resma.jpg';
import papel2 from '../assets/bobina papel.jpg';
import expandido1 from '../assets/obleas 618.png';
import expandido2 from '../assets/expandido 617.jpg';
import expandido3 from '../assets/expandido 618.jpg';
import expandido4 from '../assets/expandido-625.jpg';
import expandido5 from '../assets/expandido 628.jpg';
import plasticas from '../assets/Bandejas-Plasticas.jpg'
import plasticas1 from '../assets/ensaladera.jpg';
import cinta from '../assets/cinta-adhesiva.png';
import cinta1 from '../assets/cinta-48.jpg';
import cubierto from '../assets/Cubiertos.jpg'
import cubierto1 from '../assets/cuchara.jpg';
import cubierto2 from '../assets/cucharas-sundae.jpg';
import cubierto3 from '../assets/agitadores.jpg';


const products = [
  { 
    name: 'Bolsas de Precorte',
    image: bolsa1,
    price: '2800.00',
    detail: 'Rollo AD mundi 20x30cm x 600 grs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Precorte',
    image: bolsa1,
    price: '2800.00',
    detail: 'Rollo AD mundi 25x35 x 600 grs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Precorte',
    image: bolsa1,
    price: '2800.00',
    detail: 'Rollo AD mundi 30x40 x 600 grs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Precorte',
    image: bolsa1,
    price: '2800.00',
    detail: 'Rollo AD mundi 40x50 x 600 grs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Precorte',
    image: bolsa3,
    price: '5600.00',
    detail: 'Rollo AD mundi 50x70 x 1200 grs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Precorte',
    image: bolsa2,
    price: '2700.00',
    detail: 'Rollo AD RH 20x30 x 600 grs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Precorte',
    image: bolsa2,
    price: '2700.00',
    detail: 'Rollo AD RH 25x35 x 600 grs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Precorte',
    image: bolsa2,
    price: '2700.00',
    detail: 'Rollo AD RH 30x40 x 600 grs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Precorte',
    image: bolsa2,
    price: '2700.00',
    detail: 'Rollo AD RH 35x45 x 600 grs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Precorte',
    image: bolsa2,
    price: '2700.00',
    detail: 'Rollo AD RH 40x50 x 600 grs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Precorte',
    image: bolsa3,
    price: '5100.00',
    detail: 'Rollo AD RH 50x70 x 1200 grs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Precorte',
    image: bolsa4,
    price: '5550.00',
    detail: 'Rollo AD RH 20x60 (Pan) x 1200 grs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Precorte',
    image: bolsa4,
    price: '10110.00',
    detail: 'Rollo BD Rolan 20x30 a 40x50 x 1500 grs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Precorte',
    image: bolsa4,
    price: '7100.00',
    detail: 'Rollo BD Poli 20x30 x 1500 grs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas Camisetas',
    image: bolsa5,
    price: '730.00',
    detail: 'Camiseta blanca 20x30 Polimundi',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas Camisetas',
    image: bolsa5,
    price: '850.00',
    detail: 'Camiseta blanca 30x40 funda amarilla',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas Camisetas',
    image: bolsa6,
    price: '940.00',
    detail: 'Camiseta color 40x50 Nicolle',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas Camisetas',
    image: bolsa5,
    price: '1050.00',
    detail: 'Camiseta blanca 40x50 "Z"',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas Camisetas',
    image: bolsa6,
    price: '1810.00',
    detail: 'Camiseta color 45x60 Tiburon',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas Camisetas',
    image: bolsa6,
    price: '1980.00',
    detail: 'Camiseta color 45x60 Salome',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas Camisetas',
    image: bolsa5,
    price: '2530.00',
    detail: 'Camiseta blanca 45x60 Mundi Max',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Folex',
    image: folex1,
    price: '6390.00',
    detail: 'Laminas para hamburguesas 14x14',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Folex',
    image: folex2,
    price: '4910.00',
    detail: 'Laminas para fiambres 20x25 Rolan',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Folex',
    image: folex3,
    price: '6030.00',
    detail: 'Laminas para fiambres 20x25 Son Buenas',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Residuos',
    image: residuo,
    price: '600.00',
    detail: 'Residuos 45x60 x 30 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Residuos',
    image: residuo,
    price: '540.00',
    detail: 'Residuos 45x60 x 20 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Residuos',
    image: residuo,
    price: '470.00',
    detail: 'Residuos 45x60 x 10 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Residuos',
    image: residuo,
    price: '600.00',
    detail: 'Consorcio 60x90 x 10 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Residuos',
    image: folex1,
    price: '5000.00',
    detail: 'Consorcio 60x90 Blanca x 50 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Residuos',
    image: folex1,
    price: '390.00',
    detail: 'Consorcio 60x90 Patógenas x unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Residuos',
    image: folex1,
    price: '290.00',
    detail: 'Consorcio 60x90 Cristal x unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Residuos',
    image: residuo,
    price: '1210.00',
    detail: 'Compactadora 80x110 x 10 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Residuos',
    image: residuo,
    price: '7340.00',
    detail: 'Compactadora reforzada 80x110 x 50 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Residuos',
    image: folex1,
    price: '410.00',
    detail: 'Compactadora blanca 80x110 x unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Residuos',
    image: residuo,
    price: '1590.00',
    detail: 'Compactadora 90x120 x 10 unid. Polires',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas Especiales',
    image: especial1,
    price: '4900.00',
    detail: 'Bolsas para leña 40x70 x 50 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas Especiales',
    image: especial2,
    price: '1350.00',
    detail: 'Bolsas para horno 30x45 cm x 10 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Emblocadas',
    image: emblocada,
    price: '490.00',
    detail: 'Bolsas emblocadas 15x20',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Emblocadas',
    image: emblocada,
    price: '570.00',
    detail: 'Bolsas emblocadas 15x25',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Emblocadas',
    image: emblocada,
    price: '650.00',
    detail: 'Bolsas emblocadas 20x30',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Emblocadas',
    image: emblocada,
    price: '950.00',
    detail: 'Bolsas emblocadas 25x35',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Emblocadas',
    image: emblocada,
    price: '1350.00',
    detail: 'Bolsas emblocadas 30x40',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Emblocadas',
    image: emblocada,
    price: '1760.00',
    detail: 'Bolsas emblocadas 35x45',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Emblocadas',
    image: emblocada,
    price: '2250.00',
    detail: 'Bolsas emblocadas 40x50',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Emblocadas',
    image: emblocada,
    price: '2880.00',
    detail: 'Bolsas emblocadas 25x60 (pan)',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas Rendidoras',
    image: rendidor,
    price: '2340.00',
    detail: 'Rollo 15x25 Rolan',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas Rendidoras',
    image: rendidor,
    price: '2710.00',
    detail: 'Rollo 20x25 Rolan',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas Rendidoras',
    image: rendidor,
    price: '4370.00',
    detail: 'Rollo 25x35 Rolan',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Polipropileno',
    image: poli,
    price: '290.00',
    detail: 'polipropileno 04x18 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Polipropileno',
    image: poli,
    price: '430.00',
    detail: 'polipropileno 06x20 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Polipropileno',
    image: poli,
    price: '310.00',
    detail: 'polipropileno 08x10 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Polipropileno',
    image: poli,
    price: '670.00',
    detail: 'polipropileno 10x20 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Polipropileno',
    image: poli,
    price: '960.00',
    detail: 'polipropileno 15x20 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Polipropileno',
    image: poli,
    price: '1630.00',
    detail: 'polipropileno 15x35 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Polipropileno',
    image: poli,
    price: '1740.00',
    detail: 'polipropileno 20x30 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Polipropileno',
    image: poli,
    price: '2500.00',
    detail: 'polipropileno 25x35 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Polipropileno',
    image: poli,
    price: '3390.00',
    detail: 'polipropileno 30x40 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Polipropileno',
    image: poli,
    price: '3690.00',
    detail: 'polipropileno 35x45 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Polipropileno',
    image: poli,
    price: '5610.00',
    detail: 'polipropileno 40x50 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Polipropileno',
    image: poli,
    price: '5130.00',
    detail: 'BD Tubo prepizza 35x45 impresas x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas Riñon',
    image: rinon,
    price: '3820.00',
    detail: 'Bolsas de corte riñon fantasía 15x20 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas Riñon',
    image: rinon,
    price: '4660.00',
    detail: 'Bolsas de corte riñon fantasía 20x30 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas Riñon',
    image: rinon,
    price: '6010.00',
    detail: 'Bolsas de corte riñon fantasía 25x35 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas Riñon',
    image: rinon,
    price: '7710.00',
    detail: 'Bolsas de corte riñon fantasía 30x40 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas Riñon',
    image: rinon,
    price: '13620.00',
    detail: 'Bolsas de corte riñon fantasía 40x50 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Papel',
    image: papel1,
    price: '1340.00',
    detail: 'Bolsas de papel kraft N 1 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Papel',
    image: papel1,
    price: '1760.00',
    detail: 'Bolsas de papel kraft N 3 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Papel',
    image: papel1,
    price: '2380.00',
    detail: 'Bolsas de papel kraft N 4 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Papel',
    image: papel1,
    price: '2880.00',
    detail: 'Bolsas de papel kraft N 6 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Papel',
    image: papel1,
    price: '3580.00',
    detail: 'Bolsas de papel kraft N 7 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas de Papel',
    image: papel1,
    price: '5000.00',
    detail: 'Bolsas de papel kraft N 8 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Cajas Especial',
    image: caja,
    price: '450.00',
    detail: 'Caja cartulina blanca masas 1/4 kgs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Cajas Especial',
    image: caja,
    price: '680.00',
    detail: 'Caja cartulina blanca masas 1/2 kgs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Cajas Especial',
    image: caja,
    price: '820.00',
    detail: 'Caja cartulina blanca masas 1 kgs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Cajas Especial',
    image: caja1,
    price: '960.00',
    detail: 'Caja cartulina torta impresas',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Cajas',
    image: caja2,
    price: '9590.00',
    detail: 'Caja de pizza gris "E" x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Cajas',
    image: caja3,
    price: '16250.00',
    detail: 'Caja de pizza ref octogonal x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Cajas',
    image: caja4,
    price: '27100.00',
    detail: 'Caja de pizza corrugado x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Cajas',
    image: caja5,
    price: '5280.00',
    detail: 'Caja de lomo gris x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Cajas',
    image: caja6,
    price: '9780.00',
    detail: 'Caja de empanada ref x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Cajas',
    image: caja7,
    price: '7010.00',
    detail: 'Caja de media pizza gris x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Cajas',
    image: caja8,
    price: '2220.00',
    detail: 'Conos papas fritas grandes x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bandejas de Cartón',
    image: carton,
    price: '1750.00',
    detail: 'Bandejas de cartón rectangular N 1 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bandejas de Cartón',
    image: carton,
    price: '2020.00',
    detail: 'Bandejas de cartón rectangular N 2 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bandejas de Cartón',
    image: carton,
    price: '2660.00',
    detail: 'Bandejas de cartón rectangular N 3 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bandejas de Cartón',
    image: carton,
    price: '3000.00',
    detail: 'Bandejas de cartón rectangular N 4 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bandejas de Cartón',
    image: carton,
    price: '3520.00',
    detail: 'Bandejas de cartón rectangular N 5 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bandejas de Cartón',
    image: carton1,
    price: '4840.00',
    detail: 'Bandejas de cartón redonda N 14 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bandejas de Cartón',
    image: carton1,
    price: '9020.00',
    detail: 'Bandejas de cartón redonda N 15 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bandejas de Cartón',
    image: carton1,
    price: '9630.00',
    detail: 'Bandejas de cartón redonda N 16 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bandejas de Cartón Doradas',
    image: carton2,
    price: '710.00',
    detail: 'Bandejas N 14 x unidad',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bandejas de Cartón Doradas',
    image: carton2,
    price: '1200.00',
    detail: 'Bandejas N 15 x unidad',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bandejas de Cartón Doradas',
    image: carton2,
    price: '1540.00',
    detail: 'Bandejas N 16 x unidad',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bandejas de Cartón Doradas',
    image: carton2,
    price: '750.00',
    detail: 'Bandejas x 2 kgs rect. x unidad',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bandejas de Cartón Doradas',
    image: carton2,
    price: '1480.00',
    detail: 'Bandejas x 3 kgs rect. x unidad',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Papel',
    image: papel,
    price: '2070.00',
    detail: 'Papel resma 40/60 cm gris x kgs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Papel',
    image: papel,
    price: '2980.00',
    detail: 'Papel resma 40/60 cm primera x kgs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Papel',
    image: papel2,
    price: '2070.00',
    detail: 'Papel bobina 20/40/60 cm gris x kgs',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Expandido',
    image: expandido1,
    price: '7750.00',
    detail: 'Obleas 618 x 100 unidades',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Expandido',
    image: expandido1,
    price: '10350.00',
    detail: 'Obleas 619 x 100 unidades',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Expandido',
    image: expandido2,
    price: '5230.00',
    detail: 'Bandejas 617 x 100 unidades',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Expandido',
    image: expandido3,
    price: '7750.00',
    detail: 'Bandejas 618 x 100 unidades',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Expandido',
    image: expandido4,
    price: '15860.00',
    detail: 'Bandejas 625 x 100 unidades',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Expandido',
    image: expandido5,
    price: '25020.00',
    detail: 'Bandejas 628 x 100 unidades',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bandejas Plásticas',
    image: plasticas,
    price: '3800.00',
    detail: 'Bandejas 101 x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bandejas Plásticas',
    image: plasticas,
    price: '3780.00',
    detail: 'Bandejas 102 work apta micro x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bandejas Plásticas',
    image: plasticas,
    price: '5610.00',
    detail: 'Bandejas 103 work apta micro x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bandejas Plásticas',
    image: plasticas,
    price: '7430.00',
    detail: 'Bandejas 105 work apta micro x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bandejas Plásticas',
    image: plasticas,
    price: '5690.00',
    detail: 'Bandejas 103 Zuma apta micro x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bandejas Plásticas',
    image: plasticas,
    price: '7590.00',
    detail: 'Bandejas 105 Zuma apta micro x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bandejas Plásticas',
    image: plasticas,
    price: '12030.00',
    detail: 'Bandejas 107 apta micro x 100 unid.',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bandejas Plásticas',
    image: plasticas1,
    price: '220.00',
    detail: 'Ensaladera bowl 900 cc x unidad',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bandejas Plásticas',
    image: plasticas1,
    price: '110.00',
    detail: 'Tapa ensaladera bowl 900 cc x unidad',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Cintas Adhesivas',
    image: cinta,
    price: '590.00',
    detail: 'Cinta transparente 24 mm x 50 mts ',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Cintas Adhesivas',
    image: cinta1,
    price: '2060.00',
    detail: 'Cinta transparente 48 mm x 100 mts ',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Cubiertos',
    image: cubierto,
    price: '2200.00',
    detail: 'Cuchillos o tenedores Kovalplast x 100 unid. ',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Cubiertos',
    image: cubierto1,
    price: '2200.00',
    detail: 'Cuchara sopera x 100 unid. ',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Cubiertos',
    image: cubierto2,
    price: '1770.00',
    detail: 'Cuchara sundae x 100 unid. ',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Cubiertos',
    image: cubierto3,
    price: '340.00',
    detail: 'Agitadores para cafe x 100 unid. ',
    showSaleBadge: false,
    showPrice2: false,
  },
  { 
    name: 'Bolsas Camisetas',
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
};*/





