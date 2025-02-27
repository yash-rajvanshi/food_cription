import React from 'react'
import Image from 'next/image'
const FourPillars = () => {
  return (
    <div>
      <div className='w-full py-10 '>
        <div className='flex justify-center items-center py-5'>
            <div className='flex flex-col items-center w-full max-w-[1200px]'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-gray-800 font-medium text-3xl'>4 PILLARS of Our Well Being</h1>
                    <div className='text-gray-700 font-normal'>Embark on a personalized journey to optimal well-being with our free, practical, and results-driven lifestyle prescriptions.</div>
                </div>
                <div className='flex justify-evenly w-full py-5'>
                    <div className='flex flex-col items-center cursor-pointer'>
                        <div className='w-[100px] h-[100px] flex flex-col border-2 rounded-lg p-4 border-gray-300/30 hover:border-teal-500'>
                            <Image src="/diet_image.png" alt="diet"/>
                        </div>
                        <h2 className='flex justify-center font-semibold'>Diet</h2>
                    </div>
                    <div className='flex flex-col items-center cursor-pointer'></div>
                    <div className='flex flex-col items-center cursor-pointer'></div>
                    <div className='flex flex-col items-center cursor-pointer'></div>
                </div>
            </div>

        </div>

      </div>
    </div>
  )
}

export default FourPillars
