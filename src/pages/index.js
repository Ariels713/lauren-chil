import React from "react";
import Layout from "../components/Layout/layout";
import styled from "styled-components";
import MainHero from "../components/hero/MainHero";

function index() {
  return (
    <Layout>
      <main>
        <title>Home Page</title>
        <MainHeader>
          Hey,
          <br />
          I'm Lauren!
        </MainHeader>

        <Intro>
          I am mom, VP of Operations at Two Sigma Ventures, and hyper organized.
        </Intro>
      </main>
      <MainHero />
    </Layout>
  );
}

export default index;

const MainHeader = styled.h1`
  margin-block-start: 1rem;
  color: var(--brand);
  margin-inline-end: 0;
`;

const Intro = styled.p`
  color: var(--gray-6);
`;
