import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart/Cart';



function App() {
  return (
      <div>
        <BrowserRouter>
          <NavBar   />
            <Switch>
                <Route exact path="/"  component={ItemListContainer } /> 
                <Route path="/categoria" component={ItemListContainer }/>
                <Route exact path="/Detail" component={ItemDetailContainer }/>
                <Route exact path="/Cart" component={Cart}/>
            </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
