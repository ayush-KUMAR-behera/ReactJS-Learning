import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    // Changed to standard flex layout instead of absolute positioning
    <div className='bg-black text-white min-h-screen flex flex-col justify-center items-center gap-6 p-4'>
      <Link className='hover:underline text-xl' to='/product/men'>Mens Collection</Link>
      
      {/* <h1 className='text-3xl font-bold'>Collection's Page</h1> */}
      
      {/* The Mens component renders right here */}
      {/* <div className='w-full mt-4 flex justify-center items-center'> */}
        <Outlet />
      {/* </div> */}
    </div>
  )
}

export default Product
