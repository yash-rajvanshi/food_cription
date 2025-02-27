"use client"
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Diet from '@/components/Diet';
import PhysicalActivity from '@/components/PhysicalActivity';
import Sleep from '@/components/Sleep';
import StressManagement from '@/components/StressManage';

const FourPillars = () => {
    const [activeTab, setActiveTab] = useState("Diet"); // Default to Diet

    // Mapping for easy component rendering
    const renderComponent = () => {
        switch (activeTab) {
            case "Diet":
                return <Diet />;
            case "Physical Activity":
                return <PhysicalActivity />;
            case "Stress Management":
                return <StressManagement />;
            case "Sleep":
                return <Sleep />;
            default:
                return <Diet />;
        }
    };

    return (
        <div>
            <div className='w-full py-10 '>
                <div className='flex justify-center items-center py-5'>
                    <div className='flex flex-col items-center w-full max-w-[1200px]'>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-gray-600 font-bold text-3xl'>4 PILLARS of Our Well Being</h1>
                            <div className='text-gray-700 font-normal'>
                                Embark on a personalized journey to optimal well-being with our free, practical, and results-driven lifestyle prescriptions.
                            </div>
                        </div>

                        {/* Cards Section */}
                        <div className='flex justify-evenly w-full py-5'>
                            {[
                                { id: "Diet", img: "/diet_image.png", title: "Diet" },
                                { id: "Physical Activity", img: "/physical_activity.png", title: "Physical Activity" },
                                { id: "Stress Management", img: "/yoga.png", title: "Stress Management" },
                                { id: "Sleep", img: "/sleep.png", title: "Sleep" },
                            ].map((item) => (
                                <div key={item.id} className='flex flex-col items-center cursor-pointer' onClick={() => setActiveTab(item.id)}>
                                    <div className={`w-[100px] h-[100px] flex flex-col border-2 rounded-lg p-4 transition-all duration-300 ${activeTab === item.id ? "border-teal-500" : "border-gray-300/30 hover:border-teal-500"}`}>
                                        <Image src={item.img} alt={item.title} width={100} height={100} />
                                    </div>
                                    <h2 className={`flex justify-center font-semibold mt-2 ${activeTab === item.id ? "text-teal-500" : "text-gray-700"}`}>{item.title}</h2>
                                </div>
                            ))}
                        </div>

                        {/* Description */}
                        <div className='flex text-center text-[0.87rem] py-5 text-gray-500'>
                            The 4 pillars of Health - Diet, Physical activity, Stress management, and Sleep - form a solid foundation for a Healthy Lifestyle. By incorporating these essential elements into your daily routine, you can significantly enhance your overall Health and Well-being.
                        </div>

                        {/* Dynamic Component Rendering */}
                        <div className="w-full py-5">{renderComponent()}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FourPillars;
