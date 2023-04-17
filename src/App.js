import './App.css';
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import ItemComponent from './components/ItemComponent';
import { useState, useEffect } from 'react';




function App() {
    const [count,setCount] = useState(0);
    const [items,setItems] = useState([]);
    // const items = [{
    //   title: "Camiseta",
    //   description: "Negra Oversised",
    //   price: 50
    // },
    // {
    //   title: "Sudadera",
    // description: "Blanca Oversised",
    // price: 50
    // },
    // {
    //   title: "Pants",
    //   description: "Cargo Beige",
    //   price: 100
    // }];

    useEffect(() =>{
       new Promise ((resolve, reject) =>{
        setTimeout(() => {
          resolve ([{
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
          }])
        }, 2000);
      })
      .then((result) => {
         setItems(result);
      })
      .catch((error) =>{
        console.log("ups algo fallo");
      } );

    },[]);



    const updateCount = () =>{
      setCount(count+1);
    };

  return (
    <>
      <Navbar/>
        <div className="container">
          <ItemListContainer saludo= "Bienvenido a mi ecomerce"/>
          {
            items.map((item,index) => {
              return <ItemComponent key={index} data={item} handlerUpdate={updateCount}/>;
            })
          }
          
          <h2>Total Productos: {count}</h2>
        </div>
    </>
  );
}

export default App;
