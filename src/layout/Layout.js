import React from 'react';
import {Outlet} from "react-router";
import "./Layout.scss"
import {NavLink} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className={"header"}>
        <h1>Clothes shop</h1>
        <p>Контакти</p>
      </header>
      <div className={"containerMain"}>
        <nav className={"nav"}>
          <NavLink to={"/"}><p>Каталог товарів</p></NavLink>
          <NavLink to={"product"}><p>Одяг</p></NavLink>
          <NavLink to={"/"}><p>Техніка</p></NavLink>
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