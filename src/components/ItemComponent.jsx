import React, { useContext, useState } from "react";
import GeneralContext from "../context/GeneralContext";
import ButtonsComponent from "./ButtonsComponent";


const ItemComponent =(props) =>{

    const {data, showInfo, showDelete} = props;
    const {id: idProduct, title, image, description, price} =data;
    const { removeToCart } = useContext(GeneralContext);

   
    

    const removeThisItem = () => {
        removeToCart(data);
    };


        return (
            <>

                <div className="card shadow-sm">
                    <h5 className="card-header">
                        {title}
                        
                        <ButtonsComponent
                            showInfo={showInfo} 
                            showDelete={showDelete} 
                            idProduct={idProduct}
                            removeThisItem={removeThisItem} />
                        
                        </h5>
                        <img  width={415} height={624} src={image} alt="" />
                        <div className="card-body">
                        <p className="text">{description}</p>
                        <p className="h6">
                            Precio - ${price}
                        </p>
                        
                         
                        </div>
                    
                </div>           
            </>
        );
    }

export default ItemComponent;