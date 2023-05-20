import React from 'react'
import ListOptionNavbarComponent from './ListOptionNavbarComponent';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import GeneralContext from '../context/GeneralContext';
import useFirestore from '../utils/useFirestore';
import { useMemo } from 'react';
import CartWidget from './CartWidget';




 const nameCollection = "categories";


const Navbar = (props) => {
  const { cart } = useContext(GeneralContext);
  const [data] = useFirestore({nameCollection})

  const dataProcess = useMemo (() => {
    const categoriesObject = data.length !== 0 ? data[0]:[];
    return "category" in categoriesObject ? categoriesObject.category:[];
  },[data]);
  
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
            <ListOptionNavbarComponent nameOption={dataProcess}></ListOptionNavbarComponent>
          </div>
          <div>
           <CartWidget/>
           </div>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
