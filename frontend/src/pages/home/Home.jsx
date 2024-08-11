import React from 'react'
import Hero from './Hero'
import Blogs from '../blogs/Blogs'

function Home() {
  return (
    <div>
      <div className='bg-white text-primary container mx-auto mt-8 p-8'> 
        <Hero />
        <Blogs />
      </div>
    </div>
  )
}

export default Home
