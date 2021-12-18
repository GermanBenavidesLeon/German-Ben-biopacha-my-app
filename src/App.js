import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';
import CartContextProvider from './components/Context/CartContext';
import { Footer } from './components/Footer/Footer';
import Home from './components/Home/Home';
import Productos from '../src/components/Array/Productos.jsx'


function App() {
  return (
      <div>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar data={Productos} />
              <Routes>
                  <Route exact path="/"  element={<Home />} /> 
                  <Route exact path="/catalogo"  element={<ItemListContainer />} /> 
                  <Route exact path="/categoria/:id" element={<ItemListContainer />}/>
                  <Route exact path="/detail/:id" element={<ItemDetailContainer />}/>
                  <Route exact path="/Cart" element={<Cart />}/>
              </Routes>
            <Footer  />  
          </BrowserRouter>
        </CartContextProvider>
      </div>
  );
}

export default App;
