import React from "react";
import Layout from "./../components/Layout/Layout";
import Hero from "../components/Layout/Hero/Hero";
import Popular from "../components/Layout/Popular/Popular";
const HomePage = () => {
  return (
    <Layout title={"Home Page - Ecommerce App"}>
      {/* <h1>HomePage</h1> */}
      <Hero/>
      <Popular/>
    </Layout>
  );
};

export default HomePage;
