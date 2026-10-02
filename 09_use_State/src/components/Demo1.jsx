import React, { useState } from 'react'

const Demo1 = () => {
      const[a,setA]=useState(0);
      function changeA(){
        setA(20);
      }
      const[user,setUser]=useState("Ayush");
      function changeUser(){
        setUser("Kanha")
      }
  return (
    <div className='text-blue-950 bg-blue-400 h-screen flex flex-col items-center justify-center'>
      <h1 className='text-6xl font-bold'>The Value of a is:{a}</h1>
    <button onClick={changeA} className=' bg-amber-600 h-10 w-l mt-2 px-4 rounded-xl hover:bg-yellow-600 cursor-pointer' >Chang A</button><br />
      <h2 className='text-6xl font-bold'>Name is :{user}</h2>
      <button onClick={changeUser} className=' bg-yellow-600 h-10 w-l mt-2 px-4 rounded-xl hover:bg-amber-600 cursor-pointer'>change User</button>
    </div>
  )
}

export default Demo1
