import React, { useState } from "react";
import ItemCount from "./ItemCount";



const ItemComponent =(props) =>{
    const {data,handlerUpdate} = props;
    const {title,urlImage,description,price} =data;
    const [stock,setStock ] = useState(10);
    const handlerActionAdd = () => {
        if(stock > 0){
            setStock(stock-1);
            handlerUpdate ();
        }else{
            alert("Sin stock diponible del producto selecionado");
        }
    };

    const handlerActionRemove = () => {
            setStock(stock+1);
            handlerUpdate ();
    }

        return(
            <>
                <div className="card mt-5">
                    <div className="card-body">
                        <p>{title}</p>
                        <img  src={urlImage} alt="" />
                        <p>{description}</p>
                        <p>${price}</p>
                        <p>Cantidad disponible: {stock}</p>
                        <ItemCount stockAdd={handlerActionAdd}stockRemove={handlerActionRemove}/>  
                    </div>  
                </div>           
            </>
        );
    }

export default ItemComponent;