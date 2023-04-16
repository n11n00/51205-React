import './App.css';
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import ItemComponent from './components/ItemComponent';
import { useState } from 'react';




function App() {
    const [count,setCount] = useState(0);
    const items = [{
      title: "Camiseta",
      description: "Negra Oversised",
      price: 50
    },
    {
      title: "Sudadera",
    description: "Blanca Oversised",
    price: 50
    },
    {
      title: "Pants",
      description: "Cargo Beige",
      price: 100
    }];
    const updateCount = () =>{
      setCount(count+1);
    };

  return (
    <div>
      <Navbar/>
      <ItemListContainer saludo= "Bienvenido a mi ecomerce"/>
      {
        items.map((item,index) => {
          return <ItemComponent key={index} title={item['title']} description={item['description']} price={item['price']} handlerUpdate={updateCount}/>;
        })
      }
      
      <h2>Total Productos: {count}</h2>
    </div>
  );
}

export default App;
