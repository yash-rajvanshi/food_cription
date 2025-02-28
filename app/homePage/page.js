import React from 'react'
import Image from 'next/image'
import LandingPage from '@/sections/LandingPage'
import FourPillars from '@/sections/FourPillars'
import Strategy from '@/sections/Strategy'
import Testimonials from '@/sections/Testimonials'
import Newsletter from '@/sections/Newsletter'
import Refer from '@/sections/Refer'
import Footer from '@/sections/Footer'

const HomePage = () => {
    return (
        <div>
            <LandingPage/>
            <FourPillars/>
            <Strategy/>
            <Testimonials/>
            <Newsletter/>
            <Refer/>
            <Footer/>
        </div>
    )
}

export default HomePage
