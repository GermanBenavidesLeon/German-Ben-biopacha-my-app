import { Navbar, Nav, NavDropdown, Container, FormControl, Form, Button} from 'react-bootstrap'; 
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="navClass">
                <Navbar.Brand href="#">BioPacha</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="Home">Home</Nav.Link>
                            <NavDropdown title="Productos" id="navbarScrollingDropdown">
                                <Link to='/catalogo' className='linkClass'>
                                    <NavDropdown.Item href="#Catalogo">Catalogo</NavDropdown.Item>
                                </Link>
                                <Link to='/categoria/Frutos secos' className='linkClass'>
                                <NavDropdown.Item href="#action3">Frutos Secos</NavDropdown.Item>
                                </Link>
                                <Link to='/categoria/Semillas' className='linkClass'>
                                <NavDropdown.Item href="#action4">Semillas</NavDropdown.Item>
                                </Link>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" >
                        Redes
                        </Nav.Link>
                        <Link to='/Cart'>
                            <CartWidget />
                        </Link>
                    </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
/*

<Navbar bg="light" expand="lg">
            <Container className="navClass">
                <Navbar.Brand href="#home">Bio Pacha</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                            <Link to='/categoria' className='linkClass'>
                                <Nav.Link href="#home">Catalogo</Nav.Link>
                            </Link>
                            <Link to='/Detail' className='linkClass'>
                                <Nav.Link href="#link">Detalle del Producto</Nav.Link>
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

        */