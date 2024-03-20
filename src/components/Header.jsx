import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">DSL Descartables</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Acerca de Nosotros</Nav.Link>
              <Nav.Link href="#link">Promociones</Nav.Link>
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;



