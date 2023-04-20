import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../utils/useFetch";
import ItemListContainer from "./ItemListContainer";
import ItemComponent from "./ItemComponent";

const BASE_URL = "https://fakestoreapi.com/products/category"

const CategoryView = () => {
    const { category } = useParams();
    const [count,setCount] = useState(0);
    const {data,loading} = useFetch(`${BASE_URL}/${category}`);
    const {title, image, description, price,} = data;


    
    
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
                    <ItemComponent  data={item} handlerUpdate={updateCount}/>
                  </div>
                </div>
              );
            })
            )}
          
          <h2>Total Productos: {count}</h2>
        </div>
    </>
  );
}


export default CategoryView;