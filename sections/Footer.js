"use client"
import React from "react";
import Image from "next/image";
// import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Scooter from "@/components/Scooter";
import { motion } from 'framer-motion';

// import { Karla } from "next/font/google";


const Footer = () => {
  return (
    <>
    
    <footer className=" relative overflow-hidden text-black p-10" style={{ backgroundImage: "url('/footerBg.svg')" }} >
      <div className="max-w-7xl mx-auto  grid md:grid-cols-4 gap-4 text-center md:text-left">
        {/* Logo & Intro */}
        <div className="ml-5">
          <Image  src="/logo.svg" alt="back" width={300} height={30}/>
          <p className="text-sm lg:text-justify mt-2">
          A Healthcare Community that offers FoodCription (Lifestyle Prescription) to help individuals achieve their Health Goals by collaborating with leading Industry Partners.
          </p>
          <div className="flex md:mt-6 md:h-25 ">
            <div className="flex flex-col justify-between  " >
                <Image  src="/playStore.svg" alt="back" width={150} height={30}/>
                <Image  src="/appleStore.svg" alt="back" width={150} height={30}/>
            </div>
            <div className="ml-3"><Image  src="/rxGold.svg" alt="back" width={100} height={30}/></div>

          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:ml-[4rem]">
          <h3 className="text-lg font-semibold text-black">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="#" className="hover:text-green-800">Home</Link></li>
            <li><Link href="#" className="hover:text-green-800">About Us</Link></li>
            <li><Link href="#" className="hover:text-green-800">Partnership / Affiliate Program</Link></li>
            <li><Link href="#" className="hover:text-green-800">Blog</Link></li>
            <li><Link href="#" className="hover:text-green-800">Order</Link></li>
            <li><Link href="#" className="hover:text-green-800">Consultation / Diagnostic Tests</Link></li>
            <li><Link href="#" className="hover:text-green-800">Medical Tourism</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="lg:ml-[3rem]">
          <h3 className="text-lg font-semibold text-black">More</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="#" className="hover:text-green-800">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-green-800">Help</Link></li>
            <li><Link href="#" className="hover:text-green-800">FAQs</Link></li>
            <li><Link href="#" className="hover:text-green-800">Help</Link></li>
            <li><Link href="#" className="hover:text-green-800">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-green-800">News and Media</Link></li>
            <li><Link href="#" className="hover:text-green-800">Careers</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="">
          <h3 className="text-2xl font-bold text-black">“Simplifying Health Goals by advice on Healthy 'Food and Lifestyle”</h3>
          
        </div>
      </div>

      {/* Copyright */}
    
      <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: '0vw' }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 5, eease: "linear" } }
        className="absolute  bottom-0 left-0 w-auto h-[180px] "
      >
        <img src="/footer-scooter.svg" alt="Moving Image" className="w-[auto] h-[200px] object-cover" />
      </motion.div>
    
    </footer>
    {/* <Scooter/> */}
    <div className=" bg-green-900 justify-center text-white  text-center border-t border-gray-700 xs:pt-2  xs:text-xs sm:text-xs md:text-sm lg:text-sm">
    © {new Date().getFullYear()} FoodCription. All rights reserved. <span>| Powered by Night Owls</span>
    </div>

    </>
  );
};

export default Footer;