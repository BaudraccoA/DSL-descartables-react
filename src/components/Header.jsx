import React, { useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { CartContext } from '../context/CartContext';


export const Header = () => {
  const { cart } = useContext(CartContext);
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary pb-2">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <Navbar.Brand href="#home" className='title'>DSL Descartables</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mt-5">
            <NavLink to="/home" className="nav-link">Inicio</NavLink>
              <NavLink to="/" className="nav-link">Comprar</NavLink>
              <NavLink to="/promociones" className="nav-link">Promociones</NavLink>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown title="Bolsas" id="basic-nav-dropdown-bolsas">
                  <NavDropdown.Item href="#action/3.1">Precorte</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Papel</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Riñon</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Friselina</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">Consorcio</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6">Camisetas</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Bandejas" id="basic-nav-dropdown-bandejas">
                  <NavDropdown.Item href="#action/4.1">Carton</NavDropdown.Item>
                  <NavDropdown.Item href="#action/4.2">Plásticas</NavDropdown.Item>
                  <NavDropdown.Item href="#action/4.3">Expandido</NavDropdown.Item>
                  <NavDropdown.Item href="#action/4.4">Aluminio</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Embalajes" id="basic-nav-dropdown-embalajes">
                  <NavDropdown.Item href="#action/5.1">Hilo</NavDropdown.Item>
                  <NavDropdown.Item href="#action/5.2">Strich y Films</NavDropdown.Item>
                  <NavDropdown.Item href="#action/5.3">Folex</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Cajas" id="basic-nav-dropdown-cajas">
                  <NavDropdown.Item href="#action/6.1">Cartón gris</NavDropdown.Item>
                  <NavDropdown.Item href="#action/6.2">Cartulina</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Papel" id="basic-nav-dropdown-papel">
                  <NavDropdown.Item href="#action/7.1">Resma</NavDropdown.Item>
                  <NavDropdown.Item href="#action/7.2">Bobinas</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Utensilios" id="basic-nav-dropdown-utensilios">
                  <NavDropdown.Item href="#action/8.1">Sorbetes</NavDropdown.Item>
                  <NavDropdown.Item href="#action/8.2">Cubiertos</NavDropdown.Item>
                  <NavDropdown.Item href="#action/8.3">Agitadores</NavDropdown.Item>
                  <NavDropdown.Item href="#action/8.4">Escarbadientes</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Servilletas" id="basic-nav-dropdown-servilletas">
                  <NavDropdown.Item href="#action/9.1">Servilletas</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Potes y Vasos" id="basic-nav-dropdown-potes-y-vasos">
                  <NavDropdown.Item href="#action/10.1">Potes miel</NavDropdown.Item>
                  <NavDropdown.Item href="#action/10.2">Potes comunes</NavDropdown.Item>
                  <NavDropdown.Item href="#action/10.3">Potes bisagras</NavDropdown.Item>
                  <NavDropdown.Item href="#action/10.4">Vasos plasticos</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Varios" id="basic-nav-dropdown-varios">
                  <NavDropdown.Item href="#action/11.1">Cintas</NavDropdown.Item>
                  <NavDropdown.Item href="#action/11.2">Libreria</NavDropdown.Item>
                  <NavDropdown.Item href="#action/11.3">Moños</NavDropdown.Item>
                  <NavDropdown.Item href="#action/11.4">Moldes</NavDropdown.Item>
                </NavDropdown>              
              </NavDropdown>
              <NavLink to="/contacto" className="nav-link">Contacto</NavLink>
            </Nav>
            <NavLink to="/carrito" className="carrito">
             <Badge badgeContent={cart.length} color="secondary">
               <ShoppingCart color="action" />
             </Badge>
            </NavLink>
          </Navbar.Collapse>    
        </Container>
      </Navbar>
  )
}



