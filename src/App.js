import './App.css';
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';




function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer saludo= "bienvenido a mi ecomerce"/>
    </div>
  );
}

export default App;
