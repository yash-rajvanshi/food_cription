import React from 'react'
import Image from 'next/image'
import Diet1 from "@/assets/images/diet_content-1.svg"
import Diet2 from "@/assets/images/diet_content-2.svg"
import Diet3 from "@/assets/images/diet_content-3.svg"
const Diet = () => {
    return (
        <div className='w-full'>
            <div className='bg-[url("/diet_banner.png")] bg-cover bg-center h-auto w-[100%] flex items-center rounded-[10px] p-[30px] justify-center'>
                <span className='text-xl font-medium'>“Let food be thy medicine, and medicine be thy food.”</span>
            </div>
            <div className='flex justify-evenly w-full py-10'>
                <div className='flex flex-col justify-between items-center gap-5 w-[25%]'>
                    <Image src={Diet1} alt='img' width={100} height={100} />
                    <span className='text-xl font-medium text-center'>Foods that suits your Health condition</span>
                </div>
                <div className='flex flex-col justify-between items-center gap-5 w-[25%]'>
                    <Image src={Diet2} alt='img' width={100} height={100} />
                    <span className='text-xl font-medium text-center'>Healthy Snacking options</span>
                </div>
                <div className='flex flex-col justify-between items-center gap-5 w-[25%]'>
                    <Image src={Diet3} alt='img' width={100} height={100} />
                    <span className='text-xl font-medium text-center'>Juice Detox</span>
                </div>
            </div>
        </div>
    )
}

export default Diet
