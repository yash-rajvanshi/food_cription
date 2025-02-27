import React from "react";
import Image from 'next/image'
import Heart from "@/assets/images/heart.png"




const Contact = () => {
  return (

    <div className="h-[100vh]">

        <div 
        className="flex flex-col md:flex-row items-center justify-between lg:h-[82vh] p-6 md:py-8 md:p-12 md:px-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/form-bg.png')" }}
        >
        {/* Left Section */}

        <div className="flex justify-between gap-5 h-[100%] flex-col">
            <div className="md:w-1/3 space-y-4 text-gray-700">
                <p className="flex items-center space-x-2">
                <span className="text-green-600"><Image src="/location.svg" alt='email' width={20} height={20} className=""/></span>
                <span>India</span>
                </p>
                <p className="flex items-center space-x-2">
                <span className="text-green-600"><Image src="/location.svg" alt='emai' width={20} height={20} className=""/></span>
                <a href="mailto:foodcription@gmail.com" className="text-green-600 font-semibold hover:underline">
                    foodcription@gmail.com
                </a>
                </p>
                <p className="flex items-center space-x-2">
                <span className="text-green-600"><Image src="/location.svg" alt='ema' width={20} height={20} className=""/></span>
                <span>8919404516</span>
                </p>
            </div>
            <div>
            <Image src={Heart} alt='email' width={300} height={300} className="-pb-6"/>
            </div>

        </div>

        {/* Right Section - Contact Form */}
        <div className="md:w-1/2 bg-gray-100 p-5 md:p-5 rounded-xl shadow-lg w-full max-w-lg">
            <form className="space-y-6">
            <input
                type="text"
                placeholder="First Name"
                required
                className="w-full p-3 py-4 text-sm bg-white shadow-[0px_0px_5px_0px_rgba(0,_0,_0,_0.1)] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
                type="text"
                placeholder="Last Name"
                required
                className="w-full p-3 py-4 text-sm shadow-[0px_0px_5px_0px_rgba(0,_0,_0,_0.1)] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
                type="tel"
                placeholder="Phone"
                required
                className="w-full p-3 py-4 text-sm shadow-[0px_0px_5px_0px_rgba(0,_0,_0,_0.1)] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
                type="email"
                placeholder="Email"
                required
                className="w-full p-3 py-4 text-sm shadow-[0px_0px_5px_0px_rgba(0,_0,_0,_0.1)] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
                placeholder="Inquiry Info"
                rows="4"
                required
                className="w-full p-3 py-4 text-sm bg-white shadow-[0px_0px_5px_0px_rgba(0,_0,_0,_0.1)] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            <button
                type="submit"
                className="w-full p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
                Submit
            </button>
            </form>
        </div>
        </div>
    </div>
  );
};

export default Contact;
