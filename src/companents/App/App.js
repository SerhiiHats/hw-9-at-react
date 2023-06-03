import './App.css';
import {Route, Routes} from "react-router";
import Layout from "../../layout/Layout";
import MainPage from "../../pages/MainPage";
import ProductPage from "../../pages/ProductPage";
import Contacts from "../../pages/Contacts";
import SingleProductPage from "../../pages/SingleProductPage";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        <Route path={"/product/:id"} element={<SingleProductPage/>}/>
        <Route path={"/contacts"} element={<Contacts/>}/>
        <Route path={"/product/clothing"} element={<ProductPage/>}/>
        <Route path={"/product/electronics"} element={<ProductPage/> }/>
      </Route>
    </Routes>
  );
}

export default App;
