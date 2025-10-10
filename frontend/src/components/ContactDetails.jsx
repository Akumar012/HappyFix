import React from 'react';

const ContactDetails = () => {
  return (
    <section className="py-12 px-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Address info */}
          <div className="col">
            <div className="bg-light border p-10 rounded-lg shadow-md">
              {/* Icon */}
              <div className="mb-4">
                <i className="bi bi-geo-alt text-primary text-xl"></i>
              </div>
              {/* Title */}
              <h6 className="mb-4 font-semibold text-gray-800">Office Address</h6>
              {/* Office item */}
              <div className="flex items-center mb-2">
                {/* Avatar */}
                <div className="avatar avatar-xxs mr-2">
                  <img className="avatar-img rounded-full" src="assets/images/flags/in.svg" alt="avatar" />
                </div>
                <span className="text-gray-600 font-semibold">Ind office:</span>
              </div>
              <address className="text-gray-500">Lower Ground 2, Balajee Laxmi Enclave, Boring Canal Road, Patna-800001</address>
            </div>
          </div>

          {/* Email Info */}
          <div className="col">
            <div className="bg-light border p-10 rounded-lg shadow-md">
              {/* Icon */}
              <div className="mb-4">
                <i className="bi bi-envelope text-primary text-xl"></i>
              </div>
              {/* Title */}
              <h6 className="mb-3 font-semibold text-gray-800">Email us</h6>
              <p className="text-gray-500">We're on top of things and aim to respond to all inquiries within 24 hours.</p>
              <a
                href="mailto:info@aidhiveworkshop.com"
                className="text-blue-600 hover:text-orange-500 transition-colors"
              >
                info@aidhiveworkshop.com
              </a>
            </div>
          </div>

          {/* Call Info */}
          <div className="col">
            <div className="bg-light border p-10 rounded-lg shadow-md">
              {/* Icon */}
              <div className="mb-4">
                <i className="bi bi-telephone text-primary text-xl"></i>
              </div>
              {/* Title */}
              <h6 className="mb-3 font-semibold text-gray-800">Call us</h6>
              <p className="text-gray-500">Let's work together towards a common goal - get in touch!</p>
              <a
                href="tel:+919097400410"
                className="text-blue-600 hover:text-orange-500 transition-colors"
              >
                +91 9097400410
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map
      <iframe
        className="w-full h-[200px] md:h-[400px] grayscale mt-8"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59cd3997dec1%3A0xf5a00651e0f1b2f8!2sAidHive+Workshop+Pvt+Ltd!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
        style={{ marginBottom: '-5px' }}
        aria-hidden="false"
        tabindex="0"
      ></iframe> */}
    </section>
  );
};

export default ContactDetails;
