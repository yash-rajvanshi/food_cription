"use client"
import React from "react";
import Image from 'next/image'
import Heart from "@/assets/images/heart.png"
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from "react";
import Footer from "@/sections/Footer";
import Hero from "@/components/Hero";
import Contactbg from "@/assets/images/contact-bg.svg"



const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        inquiry: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false); // Prevent multiple submissions

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // If already submitting, prevent another request
        if (isSubmitting) return;

        setIsSubmitting(true); // Disable submit button

        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = "First Name is required";
        if (!formData.lastName) newErrors.lastName = "Last Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.inquiry) newErrors.inquiry = "Inquiry is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsSubmitting(false); // Re-enable button if validation fails
            return;
        }

        try {
            const response = await fetch("/api/send-mail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Email Sent Successfully!', {
                    position: "top-right",
                    autoClose: 2000,
                    theme: "dark"
                });

                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    inquiry: "",
                });

                setErrors({});
            } else {
                toast.error('Failed to Send Email!', {
                    position: "top-right",
                    autoClose: 1000,
                    theme: "dark"
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("An error occurred while submitting the form.");
        } finally {
            setIsSubmitting(false); // Re-enable button after request is complete
        }
    };

    return (
        <>
            <ToastContainer />
            
            <Hero image={Contactbg} title="Contact Us" height={60} />
            <div className="h-[120vh]">
                <h1 className="text-6xl font-zain py-8 font-bold text-left px-4">Get in Touch with us</h1>

                <div
                    className="flex flex-col md:flex-row items-center justify-between lg:h-[82vh] p-6 md:py-8 md:p-12 md:px-12 bg-cover bg-center"
                    style={{ backgroundImage: "url('/form-bg.png')" }}
                >
                    {/* Left Section */}

                    <div className="flex justify-between gap-5 h-[100%] lg:flex-col md:flex-row ">
                        <div className="md:w-1/1.5 space-y-4 text-gray-700">
                            <p className="flex items-center font-bold text-gray-600  space-x-3">
                                <span className="text-green-600"><Image src="/loc.svg" alt='email' width={20} height={20} className="text-gray-200" /></span>
                                <span>India</span>
                            </p>
                            <p className="flex items-center  space-x-3">
                                <span className="text-green-600 "><Image src="/mail.svg" alt='emai' width={20} height={20} className="" /></span>
                                <a href="mailto:foodcription@gmail.com" className="text-gray-600  font-semibold hover:underline">foodcription@gmail.com</a>
                            </p>
                            <p className="flex items-center font-bold text-gray-600 space-x-3 ">
                                <span className="text-green-600"><Image src="/phone.svg" alt='ema' width={20} height={20} className="" /></span>
                                <span>8919404516</span>
                            </p>
                        </div>
                        <div>
                            <Image src={Heart} alt='email' width={200} height={200} className="-pb-6 mb-8 sm:h-[100px] sm:w-[auto] md:h-[100px] md:w-[auto] lg:h-[200px] " />
                        </div>

                    </div>

                    {/* Right Section - Contact Form */}
                    <div className="md:w-1/2 h-[100%] bg-gray-50 p-5 md:mr-6 md:p-5 rounded-xl shadow-lg w-full max-w-lg">
                        <form onSubmit={handleSubmit} className="h-[100%] space-y-5">
                            <input
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="w-full p-3 py-4 text-sm bg-white shadow-[0px_0px_5px_0px_rgba(0,_0,_0,_0.1)] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="w-full p-3 py-4 text-sm shadow-[0px_0px_5px_0px_rgba(0,_0,_0,_0.1)] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <input
                                type="tel"
                                placeholder="Phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full p-3 py-4 text-sm shadow-[0px_0px_5px_0px_rgba(0,_0,_0,_0.1)] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 py-4 text-sm shadow-[0px_0px_5px_0px_rgba(0,_0,_0,_0.1)] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <textarea
                                placeholder="Inquiry Info"
                                name="inquiry"
                                value={formData.inquiry}
                                onChange={handleChange}
                                rows="4"
                                required
                                className="w-full p-3 py-4 text-sm bg-white shadow-[0px_0px_5px_0px_rgba(0,_0,_0,_0.1)] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            ></textarea>
                            <button
                                type="submit"
                                className={`w-full p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition  ${isSubmitting ? "bg-gray-500 cursor-not-allowed" : "bg-[#76B947] hover:bg-[#5E9538]"
                                    }`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    );
};

export default Contact;
