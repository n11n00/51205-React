import React from 'react'
import CarWidget from './CartWidget'
import ListOptionNavbarComponent from './ListOptionNavbarComponent';
import { NavLink } from 'react-router-dom';
 import useFetch from '../utils/useFetch';
import { useContext } from 'react';
import GeneralContext from '../context/GeneralContext';
import { routes } from "../utils/Routes";
import useFirestore from '../utils/useFirestore';


 const BASE_URL = "https://fakestoreapi.com/products/categories"
// const nameCollection = "categories";


const Navbar = (props) => {
  const { cart } = useContext(GeneralContext);
  const {data} = useFetch(BASE_URL);
  // const nameOption = [
  //   { name :"Remeras" , link: "products/category/remeras" },
  //   { name :"Pantalones" , link: "products/category/remeras" },
  //   { name :"Camperas" , link: "products/category/remeras" },
  //   { name :"Camisas" , link: "products/category/remeras" },
  //   ];
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">

          <NavLink className="navbar-brand" to="/">
            <img src="../img/brand.ico" alt="" />Tienda
          </NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ListOptionNavbarComponent nameOption={data}></ListOptionNavbarComponent>
          </div>
          <div>
           <NavLink to="products/cart">  
            <button className="btn btn-info btn-sm">Carrito : {cart.length}</button>
           </NavLink> 
           </div>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
