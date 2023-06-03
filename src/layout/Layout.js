import React from 'react';
import {Outlet} from "react-router";
import "./Layout.scss"
import {NavLink} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className={"header"}>
        <h1>Clothes shop</h1>
        <NavLink to={"/contacts"}><p>Контакти</p></NavLink>
      </header>
      <div className={"containerMain"}>
        <nav className={"nav"}>
          <NavLink to={"/"}><p>Каталог товарів</p></NavLink>
          <NavLink to={"/product/clothing"} state={{items:"clothing"}} ><p>Одяг</p></NavLink>
          {/*<NavLink to={"product/clothing"} state={{items: "clothing"}}><p>Одяг</p></NavLink>*/}
          <NavLink to={"/product/electronics"} state={{items:"electronics"}}><p>Техніка</p></NavLink>
          {/*<NavLink to={"product/electronics"} state={{items: "electronics"}}><p>Техніка</p></NavLink>*/}
        </nav>
        <main className={"main"}>
          <Outlet/>
        </main>
      </div>
      <footer className={"footer"}>2023 - footer</footer>
    </>
  );
};

export default Layout;