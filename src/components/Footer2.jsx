import React from 'react'
import {
    FaLinkedin,
    FaFacebook,
    FaInstagram,
    FaWhatsapp,
    FaEnvelope,
} from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

function Footer2() {
    return (
        <footer className="bg-black text-white border-t border-white px-6 py-4">

            <div className="container mx-auto px-6">
                <div className="flex flex-wrap">
                    
                    <div className="w-full md:w-1/5 ">
                    
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
                        <img
                        src="./src/assets/comlogo.png"
                        alt="Company Logo"
                        className=" w-90 pr-[50px]"
                    />
                    </div>
                    <div className="w-full md:w-1/5 flex flex-col justify-between ">
                        <div>

                        <h2 className="text-xl font-semibold mb-2 ">Home</h2>
                        <ul className="text-white">
                            <li>
                                <a href="#" className="">
                                    Life at sparco
                                </a>
                            </li>
                            <li>
                                <a href="#" className="">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="">
                                    Newsroom
                                </a>
                            </li>
                            <li>
                                <a href="#" className="">
                                    Initiatives
                                </a>
                            </li>
                        </ul>

                        </div>
                        <p className='text-[12px] mb-3'>©Copyright 2025 Oddiant Techlabs LLP.</p>
                    </div>
                    <div className="w-full md:w-1/5 flex flex-col justify-between ">
                    <div>
                        <h2 className="text-xl font-semibold mb-2 ">Services</h2>
                        <ul className="text-white">
                            <li>
                                <a href="#" className="">
                                    Board Advisory Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="">
                                    Executive Search
                                </a>
                            </li>
                            <li>
                                <a href="#" className="">
                                    Leadership Hiring
                                </a>
                            </li>
                            <li>
                                <a href="#" className="">
                                    Talent Advisory Solutions
                                </a>
                            </li>
                        </ul>
                        </div>
                        <p className='text-[13px] mb-3'>Privacy and Terms</p>
                    </div>
                    <div className="w-full md:w-1/5 ">
                        <h2 className="text-xl font-semibold mb-2 ">Jobs</h2>
                        <ul className="text-white">
                            <li>
                                <a href="#" className="">
                                    Browse Jobs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="">
                                    Submit your CV
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/5 ">

                        <h2 className="text-xl font-semibold mb-2 ">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white ">
                                <FaLinkedin className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-white ">
                                <FaFacebook className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-white ">
                                <FaInstagram className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-white ">
                                <FaWhatsapp className="w-6 h-6" />
                            </a>
                            <a
                                href="mailto:ayshaalam281@gmail.com"
                                className="text-white "
                            >
                                <FaEnvelope className="w-6 h-6" />
                            </a>


                        </div>
                        <div className='mt-10'>
                            <p><span className=' font-bold'>GSTIN</span> : 09AAJFO2188G1ZY</p>
                            <p><span className=' font-bold'>MSME</span> : UDYAM-UP-15-0070931</p>
                            <p><span className=' font-bold'>LLPIN</span> : ACJ-3756</p>
                            
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer2