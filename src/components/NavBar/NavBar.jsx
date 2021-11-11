import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'; 
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="navClass">
                <Navbar.Brand href="#home">Bio Pacha</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/categoria' className='linkClass'>
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Link>
                        <Link to='Detail' className='linkClass'>
                            <Nav.Link href="#link">Productos</Nav.Link>
                        </Link>
                    </Nav>
                        <Link to='/Cart'>
                            <CartWidget />
                        </Link>
                        <NavDropdown title="Nuestra Tienda" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Productos Libres de Gluten</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Herboristeria</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Semillas y Cereales</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Cremas y Unguentos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Diagnostico y Tratamiento</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">Acupuntura</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.7">Masoterapia</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.8">Gimnasia Energetica</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Biopacha_medicinal</NavDropdown.Item>
                        </NavDropdown>    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
