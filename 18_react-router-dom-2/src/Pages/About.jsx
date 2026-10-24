import React from 'react'
import {Link, Outlet} from 'react-router-dom'
const About = () => {
  return (
    <div className='bg-black text-white h-screen relative '>
        
      <Link className='py-5 px-10 rounded-4xl active:scale-110 bg-gray-500  text-center absolute top-10 left-5' to='/about/dashboard'>DashBoard</Link>
      
    </div>
    
  )
}

export default About
