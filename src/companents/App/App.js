import './App.css';
import {Route, Routes} from "react-router";
import Layout from "../../layout/Layout";
import MainPage from "../../pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout/>}>
        <Route index element={<MainPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
