import React from 'react';
import {Outlet} from "react-router";
import "./Layout.scss"

const Layout = () => {
  return (
    <>
      <header> Header</header>
      <div>
        <nav>
          Menu
        </nav>
        <main>
          <Outlet/>
        </main>
      </div>
      <footer>small; 2023 - footer</footer>
    </>
  );
};

export default Layout;