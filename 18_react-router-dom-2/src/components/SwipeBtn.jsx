import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const SwipeBtn = () => {
    const navigate=useNavigate()
    const loctaion=useLocation()
  return (
    <div className='bg-sky-800 flex justify-center gap-6 py-1 '>
      
        <button onClick={()=>{
            navigate('/')
        }} className='bg-olive-400 mt-6 px-4 py-2 rounded-3xl'>Return to Home </button>
        
        <button 
        onClick={()=>{
            if(loctaion.key=='default'){
                navigate('/')
            }else{
                navigate(-1)
            }
            
        }}
        className='bg-olive-400 mt-6 px-4 py-2 rounded-3xl'>Prev</button>
    
     <button 
        onClick={()=>{
            if(loctaion.key=='default'){
                navigate('/')
            }else{
                navigate(+1)
            }
            
        }}
        className='bg-olive-400 mt-6 px-4 py-2 rounded-3xl'>Next</button>

    </div>
  )
}

export default SwipeBtn
