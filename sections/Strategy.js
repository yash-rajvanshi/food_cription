import React from 'react'
import Image from 'next/image'

const Strategy = () => {
    return (
        <div className='flex justify-center items-center py-10'>
            <div className='flex flex-col items-center w-full max-h-[1200px]'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-3xl font-medium text-gray-600'>How It Works</h1>
                    <div className='font-normal text-gray-700'>
                        Unraveling the Mystery of Sustainable Wellness: Explore Our Tailored Strategies for a Healthier You
                    </div>
                </div>
                <div className='flex py-5 w-11/12 mx-auto'>
                    <div className='flex flex-col max-width-[100%] justify-evenly'>
                        <div className='flex rounded-l-full bg-gradient-to-b from-[#FFF] via-[#FFF] to-[#F5F5F5] w-full items-center justify-between'>
                            <div className='flex justify-start w-full'>
                                <Image src="/write.svg" alt="write" width={100} height={100}/>
                                <div className='flex flex-col w-[50%]'>
                                    <h2 className='font-extrabold text-4xl text-[#64EDCC]'>01</h2>
                                    <p className=''>Enter your details - Get FoodCription</p>
                                    <div className='flex flex-row justify-between items-center w-[40%]'>
                                        <div className='bg-[#]'></div>
                                        <div className='bg-[#]'></div>
                                        <div className='bg-[#]'></div>
                                        <div className='bg-[#]'></div>
                                        <div className='bg-[#]'></div>
                                        <div className='bg-[#]'></div>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Strategy
