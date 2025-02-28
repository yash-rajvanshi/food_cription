import React from 'react'
import Image from 'next/image'
import ReferIcon from "@/assets/images/refer_icon.svg"
import Chat from "@/assets/images/chat.svg"

const Refer = () => {
  return (
    <div className='flex items-center justify-between py-5 px-10'>
      <div className="text-white flex justify-center items-center py-3 rounded-full gap-5 px-5  bg-gradient-to-b from-[#099d49] via-[#4eb24f] to-[#8ae726]">
        <Image src={ReferIcon} alt='refer' width={30} height={30} className='' />
        <span className='text-xl'>Refer & Earn</span>
      </div>
      <div className='relative bg-gradient-to-b from-[#099d49] via-[#4eb24f] to-[#8ae726] rounded-full w-16 h-16 '>
        <Image src={Chat} alt='' width={40} height={40} className='absolute top-3 left-3'/>
      </div>
    </div>
  )
}

export default Refer
