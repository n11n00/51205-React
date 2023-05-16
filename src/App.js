import "./App.css";
import ProductViews from "./views/ProductViews";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutViews from "./views/AboutViews";
// import DetailProducts from "./views/DetailProductsView";
import DetailProductsView from "./views/DetailProductsView";
import CategoryView from "./components/CategoryView";
import { routes } from "./utils/Routes";
import GeneralContext from "./context/GeneralContext";
import { useState } from "react";
import CarContext from "./context/CarContext";
import DetailCartView from "./views/DetailCartView";

function App() {
  
  const[cart,setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart,item]);
  };

  const removeToCart = (item) => {
    const newArray = cart.filter(_item => _item.id !== item.id);
    setCart(newArray)
  };
  

  return (
    <GeneralContext.Provider value={{addToCart,removeToCart,cart}}>
      <BrowserRouter>
          <Navbar/>
          <Routes>

            <CarContext.Provider>
              <Route path={routes.root} element={<ProductViews/>}/>
              <Route path={routes.detailProductView} element={<DetailProductsView/>}/>
            </CarContext.Provider>

              <Route path={routes.about} element={<AboutViews/>}/>
              <Route path={routes.categoryView} element={<CategoryView/>}/>
              <Route path={routes.cart} element={<DetailCartView/>}/>
          </Routes>
      </BrowserRouter>
    </GeneralContext.Provider>
  );
}

export default App;
 