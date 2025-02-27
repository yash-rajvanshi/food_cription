import React from 'react'
import Image from 'next/image'

const StressManagement = () => {
    return (
        <div className='w-full'>
            <div className='bg-[url("/stress_management_banner.png")] bg-cover bg-center h-auto w-[100%] flex items-center rounded-[10px] p-[30px] justify-center'>
                <span className='text-xl font-medium'>“Stress less, live more.”</span>
            </div>
            <div className='flex justify-evenly w-full py-10'>
                <div className='flex flex-col justify-between items-center gap-5 w-[25%]'>
                    <Image src="/stress_management_content_1.svg" alt='img' width={100} height={100} />
                    <span className='text-xl font-medium text-center'>Regular tips and advice on stress management and maintaining a healthy lifestyle.</span>
                </div>
                <div className='flex flex-col justify-between items-center gap-5 w-[25%]'>
                    <Image src="/stress_management_content_2.svg" alt='img' width={100} height={100} />
                    <span className='text-xl font-medium text-center'>Access to additional resources such as meditation guides and exercise routines.</span>
                </div>
                <div className='flex flex-col justify-between items-center gap-5 w-[25%]'>
                    <Image src="/stress_management_content_3.svg" alt='img' width={100} height={100} />
                    <span className='text-xl font-medium text-center'>Integration of mindfulness and relaxation techniques into the platform.</span>
                </div>
            </div>
        </div>
    )
}

export default StressManagement
