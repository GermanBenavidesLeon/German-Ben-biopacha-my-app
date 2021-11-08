import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {
  return (
    <div>
      <NavBar   />
      <ItemListContainer greeting='Bienvenidos a Bio Pacha E-commerce' />
    </div>
  );
}

export default App;
