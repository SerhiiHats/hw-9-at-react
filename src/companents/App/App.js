import './App.css';
import {Route, Routes} from "react-router";
import Layout from "../../layout/Layout";
import MainPage from "../../pages/MainPage";
import ProductPage from "../../pages/ProductPage";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        <Route path={"/product"} element={<ProductPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
