import React from 'react'
// import Image from 'next/image'
import Caraousel from '@/components/Caraousel'

const Testimonials = () => {
  return (
    <div className='bg-[url("/testimonial_bg.svg")] w-[100%] h-[550px] bg-cover bg-center flex justify-center items-center py-10 my-7'>
        <div className='flex flex-col items-center w-full max-w-[1200px] h-[434px]'>
            <div className='text-center'>
                <h1 className='text-3xl text-gray-600 font-medium'>Testimonials</h1>
                <div className='text-lg mt-2 font-normal text-gray-700'>What they say about us?</div>
            </div>
            <Caraousel/>
        </div>
    </div>
  )
}

export default Testimonials
