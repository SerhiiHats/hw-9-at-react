import React from 'react';
import {Outlet} from "react-router";
import "./Layout.scss"

const Layout = () => {
  return (
    <>
      <header className={"header"}> Header</header>
      <div className={"containerMain"}>
        <nav className={"nav"}>
          Menu
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