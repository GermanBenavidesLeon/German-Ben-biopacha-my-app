import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <div>
        <BrowserRouter>
          <NavBar   />
            <Switch>
                <Route exact path="/"  element={<ItemListContainer  />} /> 
                <Route path="/categoria/:id" element={<ItemDetailContainer />}/>
                <Route path="/item/:id" element={<ItemDetailContainer />}/>
            </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
