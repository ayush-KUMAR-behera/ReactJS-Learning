import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-sky-900 text-white px-8 py-4'>
            <div className='text-3xl font-bold'>
                Ayush
            </div>
            <div className='flex gap-10 text-xl font-semibold'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link> 
                <Link to='/product'>Product</Link> 
                
            </div>
    </div>
  )
}

export default Navbar
