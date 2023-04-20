import "./App.css";
import ProductViews from "./views/ProductViews";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutViews from "./views/AboutViews";
import DetailProducts from "./views/DetailProductsView";
import DetailProductsView from "./views/DetailProductsView";

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<ProductViews/>}/>
            <Route path="/about" element={<AboutViews/>}/>
            <Route path="/products/detail/:idProduct" element={<DetailProductsView/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
 