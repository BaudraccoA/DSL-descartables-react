import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage'; 
import { Footer } from './Footer';

export const Home = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage imageUrl="https://mott.social/wp-content/uploads/2020/12/Envades-biodegradables-diversos.jpg"/>
        <Carousel.Caption>
          <h3>Todo lo que necesitas en productos descartables</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage imageUrl="https://biodegradablesecuador.com/wp-content/uploads/2019/05/almidon-1151x500.png" />
        <Carousel.Caption>
          <h3>Estamos comprometidos con el medioambiente</h3>
          <p>Disponemos de productos ecológicos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage imageUrl="https://pmmanagement.it/wp-content/uploads/2021/01/packaging.png" />
        <Carousel.Caption>
          <h3 className='t1'>Gran variedad de cajas</h3>
          <p className='o1'>
            solicita presupuesto.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
  );
};
