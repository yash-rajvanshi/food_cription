import React from 'react'
import Image from 'next/image'
import LandingPage from '@/sections/LandingPage'
import FourPillars from '@/sections/FourPillars'
import Strategy from '@/sections/Strategy'

const HomePage = () => {
    return (
        <div>
            <LandingPage/>
            <FourPillars/>
            <Strategy/>
        </div>
    )
}

export default HomePage
