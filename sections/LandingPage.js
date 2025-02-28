"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import LandingArrow from "@/assets/images/landing-arrow.svg"

const keywords = [
  { title: "the care of the human frame." },
  { title: "the Diet." },
  { title: "the cause and prevention of disease." }
];

const LandingPage = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isRemoving, setIsRemoving] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let currentText = keywords[index].title;

    const typingInterval = setTimeout(() => {
      if (!isRemoving) {
        // Typing animation
        if (charIndex < currentText.length) {
          setText(currentText.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          // Wait before deleting
          setTimeout(() => setIsRemoving(true), 1000);
        }
      } else {
        // Deleting animation
        if (charIndex > 0) {
          setText(currentText.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          // Move to next word
          setIsRemoving(false);
          setIndex((prev) => (prev + 1) % keywords.length);
        }
      }
    }, 60); // Speed of typing/deleting

    return () => clearTimeout(typingInterval);
  }, [charIndex, isRemoving]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col py-10 h-screen bg-[url('/landing-bg.png')] bg-cover bg-center w-full">
        <Navbar />
        <div className="w-full max-w-[1200px] py-10 mx-auto">
          <div className="flex flex-col w-[50%] justify-start">
            <div className="w-full">
              <div className="text-5xl flex flex-col mt-4 mb-6">
                <h1 className="font-extrabold text-6xl  font-zain bg-gradient-to-t from-teal-600 to-amber-300 bg-clip-text text-transparent">
                  Free <br /> Customized Lifestyle <br /> Prescription Plan!
                </h1>
              </div>
              <h2 className="mb-3 mr-5 text-xl font-karla font-bold">
                “The Doctor of the future will give no medicine, but will instruct his patient in{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="bg-clip-text font-bold whitespace-nowrap text-transparent  bg-gradient-to-b from-[#099d49] via-[#4eb24f] to-[#8ae726]"
                >
                  {text}
                </motion.span>
              </h2>
              <h3 className="font-light text-black">-Thomas Alva Edison</h3>
            </div>
            <div className="flex flex-row mt-6">
              <div className="px-10 py-3 text-xl cursor-pointer uppercase text-white font-medium rounded-lg  bg-gradient-to-b from-[#099d49] via-[#4eb24f] to-[#82c13d] shadow-lg">
                Foodcription
              </div>
              <div className="flex w-full relative">
                <Image src={LandingArrow} alt="arrow" width={50} height={50} className="w-20" />
                <span className="text-xs font-semibold absolute bottom-0 left-10">
                  Click here to get your own
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
