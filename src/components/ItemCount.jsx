import React from "react";
import { useState } from "react";

function ItemCount(props) {
    const {stock,stockAdd,stockRemove} = props;
    const [count,setCount] = useState(0);
    
    const addCount = () =>{
        setCount(count+1) 
        stockAdd();
        
    };
    
    const removeCount = () =>{
        
        setCount(count-1);
        stockRemove();
        
    };


    return (
      <>
            <button onClick={removeCount} className='btn btn-primary'>-</button>
            <h5 className='countNumber'>{count}</h5>
            <button onClick={addCount} className='btn btn-primary'>+</button>
            <button className='btn btn-secondary'>Agregar al carrito</button>
      </>
    );
  }
  
  export default ItemCount;