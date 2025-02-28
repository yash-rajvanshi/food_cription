import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "@/assets/images/logo.svg"
import CommunityIcon from "@/assets/images/community-icon.svg"
import LanguageIcon from "@/assets/images/language-icon.svg"
import ThreeDots from "@/assets/images/three-dots.svg"

const Navbar = ({position}) => {
  return (
    <div className={`max-w-[1200px] z-50 bg-slate-50 py-6 px-12 mx-auto rounded-lg w-full shadow-lg flex justify-between items-center ${position}`}>
      <Link href="/"><Image src={Logo} alt='logo' width={190} height={190}/></Link>
      <div className='gap-5 flex items-center '>
        <Link href="/">About Us</Link>
        <Link href="/">Blogs</Link>
        <Link href="/">Order</Link>
        <Link href="/">Consultation</Link>
      </div>
      <div className='flex items-center gap-7'>
        <Link href="/contact"><Image src={CommunityIcon} alt='community' width={26} height={26}/></Link>
        <Image className='cursor-pointer' src={LanguageIcon} alt='lang' width={40} height={40}/>
        <Image className='cursor-pointer' src={ThreeDots} alt='lang' width={29} height={29}/>
      </div>
    </div>
  )
}

export default Navbar
