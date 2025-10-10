import React from "react";
import {assets} from "../assets/assets.js"; // adjust path to your assets folder

const Hero = () => {
  return (
    <header className="flex flex-col lg:flex-row justify-between items-center px-8 sm:px-20 xl:px-32  pt-34 gap-10">
      {/* Left Text Section */}
      <div className="flex flex-col gap-6 max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary leading-snug">
          Fast & Reliable <br /> Appliance Repair at Your Doorstep
        </h1>
        <p className="text-gray-600 text-lg">
          From ACs to TVs, we fix it all. Fast, affordable service that keeps your home running smoothly.
        </p>
        <button className="px-6 py-3 bg-primary text-white text-lg font-medium rounded-md w-fit hover:bg-primary/90 transition">
          Contact Us
        </button>

        {/* Customer Avatars */}
        <div className="flex flex-row gap-4 items-center mt-4">
          {/* Avatar group */}
          <ul className="flex flex-row -space-x-4">
            <li>
              <img
                className="rounded-full w-16 h-16 object-cover"
                src={assets.avatar1}
                alt="Happy customer"
              />
            </li>
            <li>
              <img
                className="rounded-full w-16 h-16 object-cover"
                src={assets.avatar2}
                alt="Satisfied customer"
              />
            </li>
            <li className="rounded-full w-16 h-16 bg-primary flex justify-center items-center text-sm">
              <span className="text-white font-semibold">10K+</span>
            </li>
          </ul>

          {/* Info */}
          <div>
            <p className="font-semibold">More than 5k happy customers! 🤩</p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-[32rem]">
        <img
          src={assets.poster}
          alt="Appliance repair service"
          className="w-full h-auto object-contain"
        />
      </div>
    </header>
  );
};

export default Hero;
