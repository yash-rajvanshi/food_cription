import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
const LandingPage = () => {
  return (
    <div>
      <div className='flex flex-col  items-center'>
                <div className=' flex flex-col py-10  h-screen bg-[url("/landing-bg.png")] bg-cover bg-center w-full'>
                    <Navbar />
                    <div className='w-full max-w-[1200px] py-10 mx-auto '>
                        <div className='flex flex-col w-[45%] justify-start'>
                            <div className='w-[100%]'>
                                <div className='text-5xl flex flex-col mt-4 mb-6'>
                                    <h1 className='font-medium leading-tight bg-gradient-to-t from-teal-600 to-amber-300 bg-clip-text text-transparent'>Free <br /> Customized Lifestyle <br /> Prescription Plan!</h1>
                                </div>
                                <h2 className='mb-3 text-xl'>“The Doctor of the future will give no medicine, but will instruct his patient in <span className='text-green-500'>the care of the human frame.</span></h2>
                                <h3 className='font-light text-black'>-Thomas Alva Edison</h3>
                            </div>
                            <div className='flex flex-row mt-6'>
                                <div className="px-10 py-3 cursor-pointer uppercase text-white font-medium rounded-lg bg-gradient-to-b from-lime-500 to-lime-500 shadow-lg">Foodcription</div>
                                <div className='flex w-full relative'><Image src="/landing-arrow.svg" alt='arrow' width={50} height={50} className='w-20' /><span className='text-xs font-semibold absolute bottom-0 left-10'>Click here to get your own</span></div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default LandingPage
