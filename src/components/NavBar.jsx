import '../components/NavBar.css';

const NavBar = () => {
    return (
        <div className="divClass">
            <nav >
            <h1>Biopacha</h1>
                <ul className="menu">
                
                    <li>Nosotros</li>
                    <li className="menuTrans">Nuestra Tienda
                        <ul>
                            <li className="menuTrans">Frutos Secos</li>
                            <li className="menuTrans">Alimentos sin Gluten</li>
                            <li className="menuTrans">Acupuntura</li>
                        </ul>
                    </li>
                    <li>Medicina Alternativa</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
