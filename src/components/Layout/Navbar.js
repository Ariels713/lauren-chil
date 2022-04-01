import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

function Navbar() {
  return (
    <nav>
      <Wrapper role="list">
        <Link to="/">
          <LogoCopy>Lauren Chil</LogoCopy>
        </Link>
      </Wrapper>
    </nav>
  );
}

export default Navbar;

const LogoCopy = styled.p`
  font-family: "RooftopBotanical";
  /* font-size: var(--font-size-8); */
  font-size: 1.75rem;
  color: var(--brand);
  line-height: 1;
  margin-bottom: -1rem;
  font-weight: 500;
`;

const Wrapper = styled.ul`
  margin-inline: auto;
  padding-inline-start: 0.75rem;
  width: min-content(100%, 60rem);
  border-bottom: 1px solid var(--gray-3);
`;
