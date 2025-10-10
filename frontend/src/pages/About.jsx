import React from "react";
import { FaPlay, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const About = () => {
  return (
    <section className="pt-20 md:pt-24 lg:pt-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          {/* LEFT CONTENT */}
          <div>
            <span className="bg-amber-100 text-amber-600 text-sm font-medium px-3 py-1 rounded">
              Who We Are
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Empowering Homes with{" "}
              <span className="text-blue-600">HappyFix</span>
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              At <strong>HappyFix</strong>, we make appliance repair simple and
              stress-free. Whether it’s your fridge, AC, washing machine, or TV,
              our expert technicians bring reliable service to your doorstep —
              fast, affordable, and professional.
            </p>

            <div className="border-l-4 border-blue-500 pl-4">
              <p className="italic text-gray-800 mb-2">
                “Quality repair, happy homes — that’s the HappyFix promise.”
              </p>
              <p className="text-sm text-gray-500">— HappyFix Team</p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8 text-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-600 text-lg mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Office Location</h4>
                  <p className="text-gray-600">Patna, Bihar — 800001</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="text-blue-600 text-lg mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Email Us</h4>
                  <p className="text-gray-600">support@aidhive.in</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaPhoneAlt className="text-blue-600 text-lg mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Call Us</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT MEDIA SECTION */}
          <div className="relative flex flex-col sm:flex-row gap-5 justify-center">
            <div className="relative w-1/2">
              <img
                src="https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Technician at work"
                className="rounded-xl shadow-lg"
              />
            </div>

            <div className="w-1/2 flex flex-col gap-5">
              {/* Replace image + play icon with working video */}
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="https://images.pexels.com/photos/3806282/pexels-photo-3806282.jpeg?auto=compress&cs=tinysrgb&w=800"
                >
                  <source
                    src="https://videos.pexels.com/video-files/855027/855027-hd_1920_1080_30fps.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              <img
                src="https://images.pexels.com/photos/3825587/pexels-photo-3825587.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Customer support"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* CLIENTS SECTION */}
        <div className="mt-20 text-center">
          <p className="uppercase text-gray-500 font-semibold mb-4">
            Trusted by hundreds of happy homes
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
              alt="Samsung"
              className="h-10 grayscale hover:grayscale-0 transition"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/02/LG_logo_%282015%29.svg"
              alt="LG"
              className="h-10 grayscale hover:grayscale-0 transition"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Whirlpool_Corporation_logo_2017.svg"
              alt="Whirlpool"
              className="h-10 grayscale hover:grayscale-0 transition"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Panasonic_logo_%282013%29.svg"
              alt="Panasonic"
              className="h-10 grayscale hover:grayscale-0 transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
