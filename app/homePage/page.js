import React from 'react'
import Image from 'next/image'
import LandingPage from '@/sections/LandingPage'
import FourPillars from '@/sections/FourPillars'

const HomePage = () => {
    return (
        <div>
            <LandingPage/>
            <FourPillars/>
        </div>
    )
}

export default HomePage
