import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white p-6">
      <div className="flex justify-between items-center ">
        <img
          src="./src/assets/comlogo.png"
          alt="Company Logo"
          className=" w-90"
        />

        
        <input
          type="text"
          placeholder="Search..."
          className=" bg-white h-[40px] text-blue-950 px-15 py-6 rounded-full  focus:outline-none"
        />
        <button className="bg-transparent text-green-500 border border-green-400 px-4  h-[40px] rounded-full hover:bg-white hover:text-blue-950 transition duration-300 m-8 mr-35 ">
          Subscribe
        </button>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/5 mb-6">
            <div className="relative">
              <div className="relative inline-block">
                <a
                  href="https://maps.app.goo.gl/AHCk8wfVmJhYrG5XA" // Replace with your Google Maps link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-105"
                >
                  <img
                    src="./src/assets/location_map.png"
                    alt="Location of Company"
                    className="mb-4 w-68"
                  />
                  <div className="absolute top-1/4 left-1/3 transform mb-4 ">
                    <div className="absolute top-[-20px] left-8 bg-white bg-opacity-80 text-black p-1 rounded ">
                      Noida
                    </div>
                    <FaMapMarkerAlt className="text-red-500 w-8 h-8" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/5 mb-6">
            <h2 className="text-xl font-semibold mb-2">Home</h2>
            <ul className="text-white">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Life at sparco
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Initiatives
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-6">
            <h2 className="text-xl font-semibold mb-2">Services</h2>
            <ul className="text-white">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Board Advisory Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Executive Search
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Leadership Hiring
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Talent Advisory Solutions
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-6">
            <h2 className="text-xl font-semibold mb-2">Jobs</h2>
            <ul className="text-white">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Submit your CV
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-6">
            <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-500">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-blue-500">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-blue-500">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-blue-500">
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a
                href="mailto:ayshaalam281@gmail.com"
                className="text-white hover:text-blue-500"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-200 pt-6">
          <div className="text-white text-center ">
            <p className="text-sm">© Copyright 2023 ABC Consultants</p>
            <a href="#" className="text-white hover:text-blue-500">
              Privacy Policy
            </a>
            <a href="#" className="text-white hover:text-blue-500">
              Terms & Conditions
            </a>
            <a href="#" className="text-white hover:text-blue-500">
              Disclaimer
            </a>
            <p className="text-sm">GST Number: 1O998337292</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
