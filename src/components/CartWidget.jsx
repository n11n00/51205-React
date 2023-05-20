import React from "react";
import { NavLink } from "react-router-dom";
import GeneralContext from '../context/GeneralContext';
import { useContext } from "react";









function CartWidget() {
  const { cart } = useContext(GeneralContext);
    return (
      <>
        <NavLink to="products/cart">  
            <button className="btn btn-outline-success  btn-sm"><img src="../img/cart.ico" alt="" /> {cart.length}</button>
           </NavLink> 
      </>
    );
  }
  
  export default CartWidget;