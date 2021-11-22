import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';
import CartContextProvider from './components/Context/CartContext';
import imgLogo from './components/NavBar/Logo.png'

function App() {
  return (
      <div>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar   />
              <Routes>
                  <Route exact path="/"  element={<h2><img src={imgLogo} alt="logo" />Tienda Dietetica</h2>} /> 
                  <Route exact path="/catalogo"  element={<ItemListContainer />} /> 
                  <Route exact path="/categoria/:id" element={<ItemListContainer />}/>
                  <Route exact path="/detail/:id" element={<ItemDetailContainer />}/>
                  <Route exact path="/Cart" element={<Cart />}/>
              </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </div>
  );
}

export default App;
