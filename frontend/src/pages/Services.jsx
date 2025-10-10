import React from "react";
import { FaTools, FaSnowflake, FaTv, FaWater, FaPlug, FaFire } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "AC Repair & Service",
      desc: "Fast and reliable air conditioner repair and gas filling for all brands.",
      icon: <FaSnowflake className="text-3xl text-blue-500" />,
    },
    {
      title: "Refrigerator Repair",
      desc: "Single-door, double-door, and side-by-side fridge servicing at your doorstep.",
      icon: <FaPlug className="text-3xl text-blue-500" />,
    },
    {
      title: "Washing Machine Service",
      desc: "Expert repair and maintenance for top-load and front-load machines.",
      icon: <FaWater className="text-3xl text-blue-500" />,
    },
    {
      title: "TV Installation & Repair",
      desc: "LED/LCD TV wall mounting and repair handled by experienced technicians.",
      icon: <FaTv className="text-3xl text-blue-500" />,
    },
    {
      title: "Microwave & Geyser Repair",
      desc: "Quick fix for heating, wiring, or power issues in kitchen and bath appliances.",
      icon: <FaFire className="text-3xl text-blue-500" />,
    },
    {
      title: "Annual Maintenance Contract (AMC)",
      desc: "Keep your appliances in top condition with our affordable AMC plans.",
      icon: <FaTools className="text-3xl text-blue-500" />,
    },
  ];

  return (
    <section className="pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our <span className="text-blue-600">Services</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          From ACs to washing machines, our technicians provide fast and affordable appliance repairs right at your doorstep.
        </p>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
              <a
                href="/book"
                className="text-blue-600 font-medium hover:underline"
              >
                Book Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
