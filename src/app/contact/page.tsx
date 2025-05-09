import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 bg-neutral-100">
      
      {/* Contact Box */}
      <div className="bg-white shadow-xl rounded-l-2xl p-6 w-full max-w-[500px] aspect-square flex flex-col justify-center space-y-4">
        <h1 className="text-4xl font-bold mb-4 text-red-500">Contact Us</h1>

        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-red-600 text-2xl" />
          <p>Via del Sapore 123, Sousse, Tunisia</p>
        </div>

        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-red-600 text-2xl" />
          <p>+39 06 1234 5678</p>
        </div>

        <div className="flex items-center gap-4">
          <FaEnvelope className="text-red-600 text-2xl" />
          <p>info@ristorantefinto.it</p>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <a href="#" className="text-red-600 text-2xl hover:text-red-800">
            <FaFacebook />
          </a>
          <a href="#" className="text-red-600 text-2xl hover:text-red-800">
            <FaInstagram />
          </a>
          <a href="#" className="text-red-600 text-2xl hover:text-red-800">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Image Box */}
      <div className="w-full max-w-[500px] aspect-square flex justify-center items-center">
        <Image
          src="/slide12.png"
          alt="Ristorante Massimo"
          width={500}
          height={500}
          className="rounded-r-2xl shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default ContactUs;
