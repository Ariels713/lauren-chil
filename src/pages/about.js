import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout/layout";

function about() {
  return (
    <Layout>
      <main>
        <title>About Me</title>
        <h1>About Me</h1>
        <Link to="/">Back Home</Link>
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </main>
    </Layout>
  );
}

export default about;
