

import ItemListContainer from '../components/ItemListContainer';
import ItemComponent from '../components/ItemComponent';
import useFirestore from '../utils/useFirestore';
 import { useState  } from 'react';
// import useFetch from '../utils/useFetch';
// const BASE_URL = "https://fakestoreapi.com/products"

const nameCollection = "Items";
// const documentId = "documentId";



const ProductViews = (props) => { 
     const [count,setCount] = useState(0);
    const [data, loading] = useFirestore({nameCollection});
    console.log(data)
    

     const updateCount = () =>{
     setCount(count+1);
     };

  return (
    <>
      
        <div className="container">
          <ItemListContainer saludo= "Bienvenido a mi ecomerce"/>
          {loading ? (
            <h1>Estamos carando los productos...</h1>
          ):(
            data.map((item,index) => {
              return (
                <div className="row" key={index}>
                  <div className="col-5">
                    <ItemComponent  data={item} handlerUpdate={updateCount} />
                  </div>
                </div>
              );
            })
          )}
          
          
        </div>
    </>
  );
}

export default ProductViews;
