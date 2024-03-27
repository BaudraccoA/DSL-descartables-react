
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage'; 

export const PromotionsCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage imageUrl="https://imprentaciccariello.com.uy/wp-content/uploads/2022/06/OFERTAS-768x248.png"/>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage imageUrl="https://www.lacamaradetrenque.com.ar/wp-content/uploads/2016/09/promocionesydescuentos.jpg" />
        <Carousel.Caption>
          <h3 className='oferta2'>Por compra superior a los $ 5.000 un 5 % ; $ 15.000 un 10 % y
          $ 100.000 un 15 %</h3>  
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage imageUrl="https://www.carniceriarivas.com/upload/descuento_bienvenida.png" />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
