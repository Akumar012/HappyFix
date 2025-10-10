import React from "react";
import { assets } from "../assets/assets";
import Footer from "../components/Footer";
import PopularServices from '../components/PopularServices';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />
     
      {/* Popular Services Section */}
      <PopularServices />
       
       {/* how it works section */}
       <HowItWorks />
    </>
     );
};

export default Home;
