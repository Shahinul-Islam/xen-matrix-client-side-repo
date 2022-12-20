import React from "react";
import AboutHome from "./AboutHome";
import AdertisedProducts from "./AdvertisedProducts";
import Hero from "./Hero";
import ProductCategories from "./ProductCategories";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <ProductCategories></ProductCategories>
      <AdertisedProducts></AdertisedProducts>
      <AboutHome></AboutHome>
    </div>
  );
};

export default Home;
