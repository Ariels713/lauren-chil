import * as React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Navbar from "./Navbar";
import "./layout.css";
import "../../css/typography.css";
const Layout = ({ pageTitle = "Lauren Chils", children }) => {
  return (
    <>
      <GlobalStyle />

      <Main>
        <Navbar />
        {children}
      </Main>
    </>
  );
};

export default Layout;

const Main = styled.main`
  width: min(100% - 2rem, 60rem);
  margin: auto;
  padding-inline-start: 0;
`;
