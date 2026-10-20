import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';
const App = () => {

  const[userData,setUserData]=useState([])
  const[index,setIndex]=useState(1);


useEffect(function(){
  getData()
},[index])

  const getData= async ()=>{
    const response=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=21`);
    setUserData(response.data);
    console.log(response.data);
  }


let printUserData = <h3 className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-600 text-5xl font-bold z-50'>Loading....</h3>;


    if(userData.length>0){
      printUserData=userData.map(function(elem,idx){
        return (
        <Card elem={elem}/>
        )
      })
    }

  return (
    <div className='bg-black h-screen p-4 text-white overflow-auto relative'>
      {/* <button 
      onClick={getData}
      className='bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded-2xl'>
      Get Data</button>      */}
      {/* <h1 className='fixed text-8xl'>{index}</h1> */}
      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center gap-5 mt-5'>
 
        <button
        style={{opacity:index==1?0.5:1}}
        onClick={()=>{
          if(index>1){
          setIndex(index-1)
          setUserData([])
          }
        }}
        className='bg-amber-400 text-black px-4 py-2 rounded active:scale-95 font-semibold'>
          Prev</button>

          <span>Page {index}</span>
        
        <button
        onClick={()=>{
          setIndex(index+1)
          setUserData([])
        }}
         className='bg-amber-400 text-black px-4 py-2 rounded active:scale-95 font-semibold'>
          Next</button>
      </div>

    </div>
  )
}

export default App
