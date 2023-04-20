import "./App.css";
import ProductViews from "./views/ProductViews";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutViews from "./views/AboutViews";
import DetailProducts from "./views/DetailProductsView";
import DetailProductsView from "./views/DetailProductsView";
import CategoryView from "./components/CategoryView";
import { routes } from "./utils/Routes";


function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path={routes.root} element={<ProductViews/>}/>
            <Route path={routes.about} element={<AboutViews/>}/>
            <Route path={routes.detailProductView} element={<DetailProductsView/>}/>
            <Route path={routes.categoryView} element={<CategoryView/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
 