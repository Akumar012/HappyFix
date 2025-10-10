import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { assets } from "../assets/assets";

const WhatsAppButton = () => {
  const phoneNumber = "918764064696"; // your WhatsApp number
  const message = "Hello!  I need help with my appliance service. Could you please assist me?";
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10  z-50"
    >
     <img src={assets.WhatsApp} alt="Whatsapp" className="w-14 h-14 bg-transparent" />
    </a>
  );
};

export default WhatsAppButton;
