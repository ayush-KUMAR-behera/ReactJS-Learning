import React from 'react'
import { useParams } from 'react-router-dom'

const ContatctDetails = () => {
const params=useParams();
console.log(params);


  return (
    <div className='bg-pink-400 text-gray-800 h-screen'>
        <h1>Contact Details..........{params.id}</h1>
      
    </div>
  )
}

export default ContatctDetails
