import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";

const Hero = ({ image, title, height, className }) => {
    return (
        <>
            <div className={`relative top-0 w-full z-0 font-ubuntu`} style={{ height: `${height}vh` }}>
                <div className="relative top-10 z-100">
                    <Navbar />
                </div>
                {/* Background Image */}
                <div className="absolute inset-0 brightness-[30%]"><Image src={image} loading="lazy" alt="School Image" fill className=" object-cover " /></div>

                {/* Overlay (Gray Opaque Background) */}
                {/* <div className="absolute inset-0    bg-gray-900/80"></div> */}

                {/* Text Content - Inside Overlay */}
                {/* <div className="flex flex-col items-center "> */}
                <div className={`absolute inset-0 flex flex-col  justify-center items-center  text-white px-4 font-ubuntu`}>
                    <h1 className={` md:text-4xl text-white inline-flex gap-2 xs:text-5xl   tracking-wide   sm:text-5xl lg:text-6xl font-bold font-ubuntu ${className}`}>{title}</h1>
                </div>
                {/* </div> */}
            </div>
        </>
    );
};

export default Hero;
