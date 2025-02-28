import React from 'react'
import Image from 'next/image'
import ReferIcon from "@/assets/images/refer_icon.svg"
const Refer = () => {
  return (
    <div className='flex items-center justify-center'>
        <button className="text-white justify-center items-center py-3 rounded-lg w-[30%]  bg-gradient-to-b from-teal-600 to-[#b8f808]">
            <Image src={ReferIcon} alt='refer' width={30} height={30} className='invert'/>
            <span>Refer & Earn</span>
            </button>
    </div>
  )
}

export default Refer
