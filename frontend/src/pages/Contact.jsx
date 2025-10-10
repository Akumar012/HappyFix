import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import Footer from "../components/Footer.jsx";
import ContactDetails from "../components/ContactDetails.jsx";
import { useContact } from "../context/Contact.jsx";

const Contact = () => {
  const { data, setData, sendData } = useContact();
  
  // Track form submission status
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendData(data); // Sending the data
    console.log(data);
    
    // Set form submission to true
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-gray-50 pb-30 pt-32">
        <div className="w-full max-w-4xl mx-auto px-4">
          {/* Background Image */}
          <div className="relative">
            <img
              src={assets.contact}
              alt="contact-bg"
              className="rounded-lg w-full object-cover"
            />

            {/* Contact Form or Thank You Message */}
            <div className="relative z-10 mt-[-10rem] flex justify-center items-center">
              <div className="bg-white shadow-lg rounded-2xl p-8 md:p-10 w-[90%] md:w-[70%]">
                {/* Breadcrumb */}
                <nav className="text-sm mb-3 text-gray-500">
                  <ol className="flex space-x-2">
                    <li>
                      <a href="/" className="hover:text-blue-600">
                        Home
                      </a>
                    </li>
                    <li>/</li>
                    <li className="text-blue-600 font-medium">Contact Us</li>
                  </ol>
                </nav>

                {/* Header */}
                <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-800">
                  Book Your Service
                </h1>
                <p className="text-gray-600 mb-6">
                  You can reach us anytime via{" "}
                  <a
                    href="mailto:info@aidhiveworkshop.com"
                    className="text-blue-600 font-medium"
                  >
                    info@aidhiveworkshop.com
                  </a>
                </p>

                {/* Conditional Rendering */}
                {submitted ? (
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-green-600 mb-4">
                      Thank you for reaching out!
                    </h2>
                    <p className="text-gray-600">
                      We have received your message and will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  // Contact Form
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div>
                      <label className="block text-gray-700 mb-1">Name*</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-gray-700 mb-1">Phone No*</label>
                      <input
                        type="text"
                        name="phone"
                        placeholder="Your Phone Number"
                        required
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>

                    {/* Address */}
                    <div>
                      <label className="block text-gray-700 mb-1">Address*</label>
                      <input
                        type="text"
                        name="address"
                        placeholder="Your Address"
                        required
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>

                    {/* Appliance */}
                    <div>
                      <label className="block text-gray-700 mb-1">Appliance*</label>
                      <select
                        name="appliance"
                        required
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      >
                        <option value="">Select Appliance</option>
                        <option>Fridge (Single Door)</option>
                        <option>Fridge (Double Door)</option>
                        <option>Fridge (Side by Side)</option>
                        <option>Deep Fridge</option>
                        <option>Blast Freezer</option>
                        <option>Commercial Fridge</option>
                        <option>Washing Machine (Semi Automatic)</option>
                        <option>Washing Machine (Top Load)</option>
                        <option>Washing Machine (Front Load)</option>
                        <option>Microwave (Domestic)</option>
                        <option>Microwave (Commercial)</option>
                        <option>Geyser</option>
                        <option>Chimney</option>
                        <option>Televisions</option>
                        <option>Inverter</option>
                      </select>
                    </div>

                    {/* Work Detail */}
                    <div>
                      <label className="block text-gray-700 mb-1">Work/Problem Detail*</label>
                      <select
                        name="work_detail"
                        required
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      >
                        <option value="">Select Work/Problem Detail</option>
                        <option>Servicing</option>
                        <option>Repairing</option>
                        <option>Installation</option>
                        <option>Uninstallation</option>
                        <option>Annual Maintenance Contract (AMC)</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-gray-700 mb-1">Message</label>
                      <textarea
                        name="message"
                        placeholder="Describe your problem..."
                        required
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 h-24 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      ></textarea>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactDetails />
    </>
  );
};

export default Contact;
