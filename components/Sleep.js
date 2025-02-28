import React from 'react'
import Image from 'next/image'
import Sleep1 from "@/assets/images/sleep_content_1.svg"
import Sleep2 from "@/assets/images/sleep_content_2.svg"
import Sleep3 from "@/assets/images/sleep_content_3.svg"

const Sleep = () => {
    return (
        <div className='w-full'>
            <div className='bg-[url("/sleep_banner.png")] bg-cover bg-center h-auto w-[100%] flex items-center rounded-[10px] p-[30px] justify-center'>
                <span className='text-xl font-medium'>“Sleep is the best meditation.”</span>
            </div>
            <div className='flex justify-evenly w-full py-10'>
                <div className='flex flex-col justify-between items-center gap-5 w-[25%]'>
                    <Image src={Sleep1} alt='img' width={100} height={100} />
                    <span className='text-xl font-medium text-center'>Sleep for 7-8 hours and Stick to a sleep schedule</span>
                </div>
                <div className='flex flex-col justify-between items-center gap-5 w-[25%]'>
                    <Image src={Sleep2} alt='img' width={100} height={100} />
                    <span className='text-xl font-medium text-center'>Limit daytime naps</span>
                </div>
                <div className='flex flex-col justify-between items-center gap-5 w-[25%]'>
                    <Image src={Sleep3} alt='img' width={100} height={100} />
                    <span className='text-xl font-medium text-center'>Avoid large meals, caffeine, and alcohol before bedtime.</span>
                </div>
            </div>
        </div>
    )
}

export default Sleep
