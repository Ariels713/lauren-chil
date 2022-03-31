import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout/layout";

function index() {
  return (
    <Layout>
      <main>
        <title>Home Page</title>
        <h1>Welcome to my Gatsby site!</h1>
        <Link to="/about">About Me</Link>
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </main>
    </Layout>
  );
}

export default index;
