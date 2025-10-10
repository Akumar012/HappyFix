import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the accordion if it's already open
    } else {
      setActiveIndex(index); // Open the clicked accordion
    }
  };

  const faqs = [
    {
      question: 'What services does AidHive offer?',
      answer:
        'AidHive provides comprehensive HVAC, electrical, and appliance repair services. This includes installation, uninstallation, maintenance, and emergency repairs for HVAC systems, electrical systems, and various appliances such as microwaves, geysers, refrigerators, and washing machines.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We operate in Patna, Bihar, and Jharkhand, offering our services to both residential and commercial clients.',
    },
    {
      question: 'Do you offer emergency repair services?',
      answer:
        'Yes, AidHive offers emergency repair services to ensure your HVAC, electrical, and appliance systems are back up and running as quickly as possible.',
    },
    {
      question: 'What types of HVAC systems do you service?',
      answer:
        'We service various types of HVAC systems, including central air conditioning, split systems, heat pumps, and more.',
    },
    {
      question: 'Can you help with electrical installations and repairs?',
      answer:
        'Absolutely. Our team is equipped to handle all types of electrical installations, repairs, and maintenance services to ensure your systems are safe and efficient.',
    },
    {
      question: 'What kind of appliance repair services do you provide?',
      answer:
        'We provide repair and maintenance services for various appliances including microwaves, geysers, refrigerators (single and double door), blast freezers, and water coolers.',
    },
    {
      question: 'Do you offer annual maintenance contracts (AMC)?',
      answer:
        'Yes, we offer annual maintenance contracts to provide regular check-ups and preventive maintenance for your HVAC, electrical, and appliance systems, ensuring they operate efficiently year-round.',
    },
    {
      question: 'How can I schedule a service appointment?',
      answer:
        'You can schedule a service appointment by contacting us through our website or calling our customer service number. Our friendly team members are always ready to assist you with your needs.',
    },
    {
      question: 'What makes AidHive different from other service providers?',
      answer:
        'AidHive stands out due to our commitment to transparency, quick and quality service, and our dedication to empowering our technicians with the latest training and knowledge. We also focus on sustainable solutions and reducing CO2 emissions.',
    },
    {
      question: 'Do you provide services for commercial clients?',
      answer:
        'Yes, our technicians provide same-day AC repair service across Patna.',
    },
    // More FAQs...
  ];

  return (
    <div className="py-10 mt-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-5">You have questions, we have answers</h2>

        {/* Accordion */}
        <div className="accordion accordion-icon accordion-bg-light">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item mb-3">
              <div className="accordion-header">
                <button
                  className={`accordion-button fw-semibold rounded w-full text-left p-4 ${
                    activeIndex === index ? 'bg-light' : 'bg-white'
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                </button>
              </div>
              {/* Accordion content */}
              <div
                className={`accordion-collapse overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-screen' : 'max-h-0'
                }`}
                style={{
                  maxHeight: activeIndex === index ? '500px' : '0px', // Set max height dynamically
                }}
              >
                <div className="accordion-body mt-3 pb-0 px-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
