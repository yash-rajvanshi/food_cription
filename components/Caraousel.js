"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import LeftArrow from "@/assets/images/arrowLeft.svg"
import RightArrow from "@/assets/images/arrowRight.svg"
import Star from "@/assets/images/star.svg"
import T1 from "@/assets/images/female-doctor2_Testominial.jpg"
import T2 from "@/assets/images/hero.png"
import T3 from "@/assets/images/doctor.jpg"

const contents = [
    {
        id: 1,
        image: T1,
        name: "Kruthika",
        content:
            "I can’t thank this platform enough for the positive impact it has had on my health. The holistic approach to wellness, combining diet, fitness, and mindfulness, has completely reshaped how I take care of myself. I've never felt more in tune with my body and mind. If you're serious about improving your health, this is the place to start!",
    },
    {
        id: 2,
        image: T2,
        name: "Jai",
        content:
            "I've experienced a complete transformation in my health and well-being thanks to the guidance and resources from Foodcription. From personalized nutrition tips to stress management techniques, I've learned how to take control of my wellness journey. I feel more energized, balanced, and confident in my daily life. The support I've received has been invaluable, and I highly recommend this site!",
    },
    {
        id: 3,
        image: T3,
        name: "Aditya",
        content:
            "Overall, FoodCription is an invaluable resource for anyone looking to take charge of their health. With its personalized lifestyle prescriptions and supportive community, it empowers users to make meaningful changes in their lives. I highly recommend checking it out!",
    },
];

const Caraousel = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

    const nextSlide = () => {
        setDirection(1); // Moving forward
        setIndex((prev) => (prev + 1) % contents.length);
    };

    const prevSlide = () => {
        setDirection(-1); // Moving backward
        setIndex((prev) => (prev - 1 + contents.length) % contents.length);
    };

    return (
        <div>
            <div className="mt-20 w-full flex justify-center items-center relative">
                <button
                    onClick={prevSlide}
                    className="absolute  -left-[37rem] px-4 py-2  text-black rounded"
                >
                    <Image src={LeftArrow} alt="prev" width={40} height={40} />
                </button>

                <div className="w-full flex justify-center relative">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: direction === 1 ? 50 : -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction === 1 ? 0 : 50 }}
                            transition={{ duration: 0.5 }}
                            className="absolute text-xl font-bold flex gap-10 w-[700px]"
                        >
                            <div className="flex justify-evenly gap-10 w-full">
                                <div className="rounded-lg ">
                                    <Image
                                        src={contents[index].image}
                                        alt="doc"
                                        width={200}
                                        height={150}
                                        className="w-[380px] h-auto rounded-lg"
                                    />
                                </div>
                                <div className="flex flex-col justify-start w-full">
                                    <div>{contents[index].name}</div>
                                    <div className="flex gap-3">
                                        {[...Array(5)].map((_, i) => (
                                            <Image key={i} src={Star} alt="star" width={30} height={30} />
                                        ))}
                                    </div>
                                    <p className="mt-10 font-normal text-gray-600 text-sm">{contents[index].content}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <button
                    onClick={nextSlide}
                    className="absolute  -left-[34rem] px-4 py-2  text-black rounded"
                >
                    <Image src={RightArrow} alt="prev" width={40} height={40} />
                </button>
            </div>
        </div>
    );
};

export default Caraousel;
