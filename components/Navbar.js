import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Navbar = ({position}) => {
  return (
    <div className={`max-w-[1200px] z-50 bg-slate-50 py-6 px-12 mx-auto rounded-lg w-full shadow-lg flex justify-between items-center ${position}`}>
      <Link href="/"><Image src="/assets/images/logo.svg" alt='logo' width={200} height={200}/></Link>
      <div className='gap-5 flex items-center '>
        <Link href="/">About Us</Link>
        <Link href="/">Blogs</Link>
        <Link href="/">Order</Link>
        <Link href="/">Consultation</Link>
      </div>
      <div className='flex items-center gap-7'>
        <Link href="/contact"><Image src="/assets/images/community-icon.svg" alt='community' width={30} height={30}/></Link>
        <Image className='cursor-pointer' src="/assets/images/language-icon.svg" alt='lang' width={40} height={40}/>
        <Image className='cursor-pointer' src="/assets/images/three-dots.svg" alt='lang' width={35} height={35}/>
      </div>
    </div>
  )
}

export default Navbar
