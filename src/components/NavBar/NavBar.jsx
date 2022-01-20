import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'; 
import { BsSearch, BsX } from "react-icons/bs";
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext';
import { useState } from 'react';

const NavBar = ({data}) => {
    const { cantidadItem } = useCartContext()

    const [searchData, setSearchData] = useState([])
    const [dataEnter, setDataEnter] = useState('')

    const handSearch = (e) => {
        const searchWord = e.target.value
        setDataEnter(searchWord)
        const newSearch = data.filter((prod) => {
            return prod.name.toLowerCase().includes(searchWord.toLowerCase())
        })

        if (searchWord === '') {
            setSearchData([]);
        } else {
            setSearchData(newSearch)
        }
    }

    const clearIcon = () => {
        setSearchData([])
        setDataEnter('')
    }

    return (
        <Navbar className='navbarHeader' expand='lg' sticky='top'>
                <Container className="fluid">
                    <Navbar.Brand href="#">BioPacha</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className="mediaNav" id="navbarScroll">
                        <Nav>
                            <Link to='/' className='linkClass'>
                            <Nav.Link href="Home">Home</Nav.Link>
                            </Link>
                            <NavDropdown title="Productos" id="navbarScrollingDropdown">
                            <Link to='/catalogo' className='linkClass'>
                                <NavDropdown.Item variant="outline-success" href="#Catalogo">Catalogo</NavDropdown.Item>
                            </Link>
                            <Link to='/categoria/Frutos Secos' className='linkClass'>
                                <NavDropdown.Item href="#action3">Frutos Secos</NavDropdown.Item>
                            </Link>
                            <Link to='/categoria/Semillas' className='linkClass'>
                                <NavDropdown.Item href="#action4">Semillas</NavDropdown.Item>
                            </Link>
                            <Link to='/categoria/Jugos' className='linkClass'>
                               <NavDropdown.Item href="#action5">Jugos</NavDropdown.Item>
                            </Link>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Nuestros clientes
                            </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" >
                                Terapias Complementarias
                            </Nav.Link>
                            <Link to='/Cart' className='linkClass cartWi'>
                                { cantidadItem() !== 0 && cantidadItem() }
                                <CartWidget />
                            </Link>
                        </Nav>
                    <form className="searchMenu">
                        <div className='inputIcon listProducts'>
                            <input
                                type="text"
                                placeholder='Buscar Producto'
                                className="form-control"
                                value={dataEnter}
                                onChange={handSearch}
                            />
                            <div className='iconSearch'>
                                {searchData.length === 0 ? 
                                <BsSearch  /> :
                                <BsX id='clearIcon' onClick={clearIcon} /> }
                            </div>
                    </div>
                            {searchData.length !== 0 && (
                                <div className='searchList'>
                                    {searchData.map(( prod ) => {
                                        return(
                                            <Link to={`/detail/${prod.id}`}>
                                                <li className='classItem'>{prod.name}</li>
                                            </Link>
                                    )})}
                                </div> 
                            )}
                    </form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;

