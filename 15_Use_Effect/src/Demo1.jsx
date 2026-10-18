import React, { useEffect, useState } from 'react'

const Demo1= () => {


  const[a,setA]=useState(1);
  const[b,setB]=useState(-1);

  useEffect(function(){
   console.log('UseEffect running...');
   
  },[b])



 
  return (
    <div>
      <h1>A is :{a}</h1>
      <h1>B is:{b}</h1>

      <button onClick={()=>{
        setA(a+1);
      }} >Click A</button>

      <button onClick={()=>{
        setB(b-1);
      }}>Click B</button>
    </div>
  )
}

export default Demo1
