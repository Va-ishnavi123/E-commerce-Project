import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollection from "../Components/NewCollections/NewCollection";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import LoginSignup from "./LoginSignup";
import CartItems from "../Components/CartItems/CartItems";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
      <LoginSignup />
      <CartItems/>
    </div>
  );
};

export default Shop;
