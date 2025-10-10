import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { assets } from "../assets/assets"; // adjust import path

const services = [
  { title: "Split AC Servicing", img: assets.splitrepair, link: "/booking_form" },
  { title: "Split AC Installation", img: assets.split, link: "/booking_form" },
  { title: "Window AC Repairing", img: assets.Window_AC, link: "/booking_form" },
  { title: "Cassette AC Installation", img: assets.ceiling, link: "/booking_form" },
  { title: "VRF Installation", img: assets.vrf, link: "/booking_form" },
  { title: "Washing Machine (Semi-Automatic) Repairing", img: assets.wmSemi, link: "/booking_form" },
  { title: "Washing Machine (Fully-Automatic) Servicing", img: assets.wmAuto, link: "/booking_form" },
  { title: "Microwave Oven Repairing", img: assets.microOven, link: "/booking_form" },
  { title: "Fridge (Single Door) Repairing", img: assets.fridge, link: "/booking_form" },
  { title: "LED Installation", img: assets.led, link: "/booking_form" },
];

const PopularServices = () => {
  return (
    <section className="bg-gray-50 py-12 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div className="md:w-1/2 lg:w-2/5">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
              Popular Services
            </h2>
          </div>
          <div className="md:w-1/2 lg:w-2/5 mt-6 md:mt-0">
            <p className="text-gray-600">
              Our team merges innovative technology with expert craftsmanship to
              provide HVAC, electrical, and appliance solutions.
            </p>
            <div className="flex gap-3 mt-4">
              <button className="swiper-button-prev-team w-10 h-10 flex items-center justify-center border rounded-full bg-white shadow hover:bg-gray-100 transition">
                ←
              </button>
              <button className="swiper-button-next-team w-10 h-10 flex items-center justify-center border rounded-full bg-white shadow hover:bg-gray-100 transition">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          loop={true} // 👈 enables infinite loop
          autoplay={{
            delay: 2500, // 👈 time between slides (2.5s)
            disableOnInteraction: false, // keeps autoplay after user interaction
          }}
          navigation={{
            nextEl: ".swiper-button-next-team",
            prevEl: ".swiper-button-prev-team",
          }}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-48 object-cover transform hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Card body */}
                <div className="p-4">
                  <h6 className="text-lg font-medium text-gray-800">
                    <a href={service.link} className="hover:text-blue-600">
                      {service.title}
                    </a>
                  </h6>
                </div>

                {/* Card footer */}
                <div className="p-4 border-t">
                  <a
                    href={service.link}
                    className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                  >
                    Book this service <span>→</span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularServices;
