import React from "react";

const steps = [
  {
    number: "1️⃣",
    title: "Book a Service",
    desc: "Call us or book online in just a few clicks.",
  },
  {
    number: "2️⃣",
    title: "Get Same-Day Visit",
    desc: "Our technician arrives at your doorstep on the same day.",
  },
  {
    number: "3️⃣",
    title: "Transparent Pricing",
    desc: "Clear estimates with no hidden costs.",
  },
  {
    number: "4️⃣",
    title: "Expert Repair",
    desc: "Professional solutions for long-lasting results.",
  },
  {
    number: "5️⃣",
    title: "After-Service Support",
    desc: "Enjoy peace of mind with our post-repair support.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-orange-500">How Our Service Works</h2>
          <p className="text-gray-600 mt-2">
            Fast, Transparent, and Hassle-Free from Booking to After-Service Support
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="text-5xl mb-3 text-orange-500">{step.number}</div>
              <h5 className="font-semibold text-lg mb-2">{step.title}</h5>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
