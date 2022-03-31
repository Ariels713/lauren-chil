import * as React from "react";
import GlobalStyle from "./GlobalStyle";
import Navbar from "./Navbar";
import "./layout.css";

const Layout = ({ pageTitle = "Lauren Chils", children }) => {
  return (
    <>
      <GlobalStyle />

      <main>
        <Navbar />
        {children}
      </main>
    </>
  );
};

export default Layout;
