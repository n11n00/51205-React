import "./App.css";
import ProductViews from "./views/ProductViews";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DetailProductsView from "./views/DetailProductsView";
import ItemFormView from "./views/ItemFormView";
import { routes } from "./utils/Routes";
import GeneralContext from "./context/GeneralContext";
import { useState } from "react";
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

  const clearCart = () => {
    setCart([])
  };
  

  return (
    <GeneralContext.Provider value={{addToCart,removeToCart,clearCart,cart}}>
      <BrowserRouter>
          <Navbar/>
          <Routes>

            
              <Route path={routes.root} element={<ProductViews/>}/>
              <Route path={routes.detailProductView} element={<DetailProductsView/>}/>
              <Route path={routes.eventos} element={<ItemFormView />}></Route>
              <Route path={routes.categoryView} element={<ProductViews/>}/>
              <Route path={routes.cart} element={<DetailCartView/>}/>
          </Routes>
      </BrowserRouter>
    </GeneralContext.Provider>
  );
}

export default App;
 