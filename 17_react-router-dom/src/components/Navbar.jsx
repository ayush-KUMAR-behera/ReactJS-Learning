import React from 'react'

import {Link} from 'react-router-dom'

const Navbar = () => {
  return (

    <div className='bg-fuchsia-800 text-amber-300 flex justify-between h-13 px-4 py-2 items-center font-semibold text-3xl'>
      <h3>PMC</h3>
    <div className=' flex items-center gap-x-40'>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/contact'}>Contact</Link>
    </div>
    </div>
  )
}

export default Navbar
