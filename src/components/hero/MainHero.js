import React from "react";
import styled from "styled-components";

import { StaticImage } from "gatsby-plugin-image";

function MainHero() {
  return (
    <Wrapper>
      <StaticImage
        src="../../images/headerGraphic.svg"
        alt=""
        placeholder="blurred"
      />
      <StaticImage
        src="../../images/lauren.chil.webp"
        alt="Lauren Chiluiza"
        placeholder="blurred"
      />
    </Wrapper>
  );
}

export default MainHero;

const Wrapper = styled.div`
  margin-block-start: 1rem;
  display: grid;
  grid-template-columns: "Stack";
  place-items: center;

  & > * {
    grid-area: Stack;
  }
`;
