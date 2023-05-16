import React, { useContext } from "react";
import GeneralContext from "../context/GeneralContext";
import ItemComponent from "../components/ItemComponent";


const DetailCartView = () => {
    const {cart} = useContext(GeneralContext);
    return(
        <>
            <div className="container">
                {cart.map((item,index) => (
                <ItemComponent key={index} data={item}/>))}
            </div>
        </>
    );
};

export default DetailCartView;