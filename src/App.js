import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';



function App() {
  return (
    <div>
      <NavBar   />
      <ItemListContainer greeting='Bienvenidos a Bio Pacha E-commerce' />
      <ItemCount initial={1} stock={5} />
    </div>
  );
}

export default App;
