import React from "react";
import AboutHome from "./AboutHome";
import AdertisedProducts from "./AdvertisedProducts";
import Hero from "./Hero";
import ProductCategories from "./ProductCategories";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <AdertisedProducts></AdertisedProducts>
      <AboutHome></AboutHome>
      <ProductCategories></ProductCategories>
    </div>
  );
};

export default Home;
