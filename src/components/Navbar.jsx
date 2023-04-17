import React from 'react'
import CarWidget from './CartWidget'
import ListOptionNavbarComponent from './ListOptionNavbarComponent';


const Navbar = (props) => {
      const nameOption = ["Remeras","Pantalones","Camperas","Camisas"];
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand" href="#">
            <img src="../img/brand.ico" alt="" />Tienda
            </span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ListOptionNavbarComponent nameOption={nameOption}></ListOptionNavbarComponent>
          </div>
            <CarWidget/>
        </div>
      </nav>
      </>
    );
  }
  
  export default Navbar;
  