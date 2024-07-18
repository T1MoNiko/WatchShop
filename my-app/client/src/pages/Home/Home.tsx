import React from "react";
import Header from "../../components/header/Header";
import ProductsPart from "../../components/products/Products";
import NewArrivals from "../../components/newArrivals/NewArrivals";
import Brands from "../../components/brands/Brands";
import Footer from "../../components/footer/Footer";

const Home: React.FC = () => {
    return (
    <>
      <Header/>
      <ProductsPart/>
      <NewArrivals/>
      <Brands/>
      <Footer/>
    </>
    )
}

export default Home;