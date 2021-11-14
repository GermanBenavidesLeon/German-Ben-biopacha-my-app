import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';



//category ID es un parametro
function App() {
  return (
      <div>
        <BrowserRouter>
          <NavBar   />
            <Routes>
                <Route exact path="/"  element={<ItemListContainer />} /> 
                <Route exact path="/categoria/:id" element={<ItemListContainer />}/>
                <Route exact path="/detail/:id" element={<ItemDetailContainer />}/>
                <Route exact path="/Cart" element={<Cart />}/>
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
