import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { NavLink } from "react-router-dom";
import GeneralContext from "../context/GeneralContext";


const ItemComponent =(props) =>{

    const {data,handlerUpdate} = props;
    const {id: idProduct, title, image, description, price, stock} =data;
    const [_stock,_setStock ] = useState (stock || 10);
    const { removeToCart } = useContext(GeneralContext);

    const handlerActionAdd = () => {
        if(_stock > 0){
            _setStock(_stock-1);
            handlerUpdate ();
        }else{
            alert("Sin stock diponible del producto selecionado");
        }
    };

    const handlerActionRemove = () => {
            _setStock(stock+1);
            handlerUpdate ();
    }

    // const showShortValue = (value="", lengthMax = 45) => {
    //     return value.length > lengthMax ? value.substring (0, lengthMax).contact(" ...") : value;
    // }

    const removeThisItem = () => {
        removeToCart(data);
    };


        return (
            <>

                <div className="card shadow-sm">
                    <div className="card-header">
                        {title}
                        <button className="btn btn-danger btn-sm" onClick={removeThisItem}>x</button>
                        <NavLink to={`/products/detail/${idProduct}`}>
                            <button className="btn btn-outline-info btn-sm" onClick={handlerActionAdd}>
                               + info
                            </button>
                        </NavLink>
                        <img width={300} height={300} src={image} alt="" />
                        <div className="card-body">
                        <p className="text-muted">{description}</p>
                        <p>
                            ${price} - Cantidad disponible: {_stock}
                        </p>
                        
                        <ItemCount stockAdd={handlerActionAdd}stockRemove={handlerActionRemove}/>  
                        </div>
                    </div>  
                </div>           
            </>
        );
    }

export default ItemComponent;