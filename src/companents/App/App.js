import './App.css';
import {Route, Routes} from "react-router";
import Layout from "../../layout/Layout";
import MainPage from "../../pages/MainPage";
import ProductPage from "../../pages/ProductPage";
import Contacts from "../../pages/Contacts";
import SingleProductPage from "../../pages/SingleProductPage";
import NotfoundPage from "../../pages/NotfoundPage";
import ErrorPage from "../../pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        <Route path={"/product/:id"} element={<SingleProductPage/>}/>
        <Route path={"/contacts"} element={<Contacts/>}/>
        <Route path={"/product/clothing"} element={<ProductPage/>}/>
        <Route path={"/product/electronics"} element={<ProductPage/> }/>
        <Route path={"*"} element={<NotfoundPage/>}/>
        <Route path={"/error"} element={<ErrorPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
