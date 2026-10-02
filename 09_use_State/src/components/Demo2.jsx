import React, { useState } from 'react'


const Demo2 = () => {

    const[num,setNum]=useState(0);
    function increase(){
        setNum(num+1);
    }

    function decrease(){
        setNum(num-1);
    }
    function reSet(){
        setNum(0);
    }

  return (
    <div className='bg-gray-800 h-screen flex items-center justify-center'>
        <div className='bg-gray-500 w-xl h-[300px] flex flex-col items-center gap-5.5'>

        <h1 className='bg-green-200 text-7xl h-60 w-60 flex justify-center items-center mt-10'>{num}</h1>
        <div className='mb-2 text-1xl font-semibold flex gap-5'>
            <button onClick={increase} className='bg-yellow-400 h-10 w-20 rounded-2xl cursor-pointer text-red-400 font-bold text-4xl align-middle'> +</button>
            <button onClick={decrease} className='bg-red-400 h-10 w-20  rounded-2xl cursor-pointer font-bold text-yellow-400 text-4xl'>-</button>
            <button onClick={reSet} className='bg-yellow-400 h-10 w-20  rounded-2xl cursor-pointer font-bold text-red-400 text-1xl'>Reset</button>
        </div>
        </div>

      
    </div>
  )
}
 
export default Demo2