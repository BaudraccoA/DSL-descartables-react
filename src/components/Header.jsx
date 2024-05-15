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
            <Navbar.Brand to="#home" className='title'>DSL Descartables</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mt-5">
            <NavLink to="/" className="nav-link">Inicio</NavLink>
              <NavLink to="/comprar" className="nav-link">Comprar</NavLink>
              <NavLink to="/promociones" className="nav-link">Promociones</NavLink>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavLink to="/producto" className="dropdown-item">Ver todos</NavLink>
                <NavDropdown.Divider />
                    <NavDropdown title="Bolsas" id="basic-nav-dropdown-bolsas">
                        <NavLink to="/producto/precorte" className="dropdown-item">Precorte</NavLink>
                        <NavLink to="/producto/papel" className="dropdown-item">Papel</NavLink>
                        <NavLink to="/producto/rinon" className="dropdown-item">Riñon</NavLink>
                        <NavLink to="/producto/friselina" className="dropdown-item">Friselina</NavLink>
                        <NavLink to="/producto/consorcio" className="dropdown-item">Consorcio</NavLink>
                        <NavLink to="/producto/camisetas" className="dropdown-item">Camisetas</NavLink>
                    </NavDropdown>
                    <NavDropdown title="Bandejas" id="basic-nav-dropdown-bandejas">
                        <NavLink to="/producto/carton" className="dropdown-item">Carton</NavLink>
                        <NavLink to="/producto/plasticas" className="dropdown-item">Plásticas</NavLink>
                        <NavLink to="/producto/expandido" className="dropdown-item">Expandido</NavLink>
                        <NavLink to="/producto/aluminio" className="dropdown-item">Aluminio</NavLink>
                    </NavDropdown>
                    <NavDropdown title="Embalajes" id="basic-nav-dropdown-embalajes">
                        <NavLink to="/producto/hilo" className="dropdown-item">Hilo</NavLink>
                        <NavLink to="/producto/film" className="dropdown-item">Strich y Films</NavLink>
                        <NavLink to="/producto/folex" className="dropdown-item">Folex</NavLink>
                    </NavDropdown>
                    <NavDropdown title="Cajas" id="basic-nav-dropdown-cajas">
                        <NavLink to="/producto/cartongris" className="dropdown-item">Cartón gris</NavLink>
                        <NavLink to="/producto/cartulina" className="dropdown-item">Cartulina</NavLink>
                    </NavDropdown>
                    <NavDropdown title="Papel" id="basic-nav-dropdown-papel">
                        <NavLink to="/producto/resma" className="dropdown-item">Resma</NavLink>
                        <NavLink to="/producto/bobina" className="dropdown-item">Bobinas</NavLink>
                    </NavDropdown>
                        <NavDropdown title="Utensilios" id="basic-nav-dropdown-utensilios">
                        <NavLink to="/producto/sorbetes" className="dropdown-item">Sorbetes</NavLink>
                        <NavLink to="/producto/cubiertos" className="dropdown-item">Cubiertos</NavLink>
                        <NavLink to="/producto/agitadores" className="dropdown-item">Agitadores</NavLink>
                        <NavLink to="/producto/escarbadientes" className="dropdown-item">Escarbadientes</NavLink>
                    </NavDropdown>
                    <NavDropdown title="Servilletas" id="basic-nav-dropdown-servilletas">
                         <NavLink to="/producto/servilletas" className="dropdown-item">Servilletas</NavLink>
                    </NavDropdown>
                    <NavDropdown title="Potes y Vasos" id="basic-nav-dropdown-potes-y-vasos">
                         <NavLink to="/producto/potesmiel" className="dropdown-item">Potes miel</NavLink>
                         <NavLink to="/producto/potescomunes" className="dropdown-item">Potes comunes</NavLink>
                         <NavLink to="/producto/potesbisagras" className="dropdown-item">Potes bisagras</NavLink>
                         <NavLink to="/producto/vasos" className="dropdown-item">Vasos plasticos</NavLink>
                    </NavDropdown>
                    <NavDropdown title="Varios" id="basic-nav-dropdown-varios">
                         <NavLink to="/producto/cintas" className="dropdown-item">Cintas</NavLink>
                         <NavLink to="/producto/libreria" className="dropdown-item">Libreria</NavLink>
                         <NavLink to="/producto/monos" className="dropdown-item">Moños</NavLink>
                         <NavLink to="/producto/moldes" className="dropdown-item">Moldes</NavLink>
                         <NavLink to="/producto/varios" className="dropdown-item">Art. varios</NavLink>
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



