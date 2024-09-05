import React from 'react'
import HomeSection from '@/components/HeroSection'
import { Courses } from '@/components/Courses'
import WhoChooseUs from '@/components/WhoChooseUs'

const Home = () => {
  return (
    <main className='min-h-screen bg-black/[0.94] antialiased bg-grid-white/[0.0] text-white'>
     <HomeSection />
     <Courses />
     <WhoChooseUs />
    </main>
  )
}

export default Home
