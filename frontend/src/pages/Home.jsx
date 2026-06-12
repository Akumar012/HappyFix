import React from "react";
import { assets } from "../assets/assets";
import Footer from "../components/Footer";
import PopularServices from '../components/PopularServices';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import { SEO, generateLocalBusinessSchema } from '../components/SEO';

const Home = () => {
  return (
    <>
     <SEO
  title="AC Repair, Refrigerator Repair & Home Appliance Services in Jaipur"
  description="Professional AC, Refrigerator, Washing Machine, TV, Microwave & Geyser repair services in Jaipur. Fast doorstep service, affordable pricing and expert technicians from HappyFix."
  url="/"
  schema={generateLocalBusinessSchema()}
/>
      
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
