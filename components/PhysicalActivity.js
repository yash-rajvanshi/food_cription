import React from 'react'
import Image from 'next/image'
import Physical1 from "@/assets/images/physical_activity_content_1.svg"
import Physical2 from "@/assets/images/physical_activity_content_2.svg"
import Physical3 from "@/assets/images/physical_activity_content_3.svg"

const PhysicalActivity = () => {
    return (
        <div className='w-full'>
            <div className='bg-[url("/physical_activity_banner.png")] bg-cover bg-center h-auto w-[100%] flex items-center rounded-[10px] p-[30px] justify-center'>
                <span className='text-xl font-medium'>“To enjoy the glow of good health, you must engage in Physical Activities like Yoga/Exercise.”</span>
            </div>
            <div className='flex justify-evenly w-full py-10'>
                <div className='flex flex-col justify-between items-center gap-5 w-[25%]'>
                    <Image src={Physical1} alt='img' width={100} height={100} />
                    <span className='text-xl font-medium text-center'>30 minutes brisk walk every day</span>
                </div>
                <div className='flex flex-col justify-between items-center gap-5 w-[25%]'>
                    <Image src={Physical2} alt='img' width={100} height={100} />
                    <span className='text-xl font-medium text-center'>Sports Engagement</span>
                </div>
                <div className='flex flex-col justify-between items-center gap-5 w-[25%]'>
                    <Image src={Physical3} alt='img' width={100} height={100} />
                    <span className='text-xl font-medium text-center'>Basic Yoga (Surya Namaskar)</span>
                </div>
            </div>
        </div>
    )
}

export default PhysicalActivity
