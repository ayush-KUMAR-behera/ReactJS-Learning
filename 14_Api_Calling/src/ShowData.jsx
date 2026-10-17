import React, { useState } from 'react'
import axios from 'axios'

const ShowData = () => {


  const[data,setData]=useState([])

    
const getData= async ()=>{
    const response=await axios.get('https://picsum.photos/v2/list');
    console.log(response.data);
    
    setData(response.data)
}

  return (
    <div>
      <button onClick={getData}> Get List Data</button>
      <div>
        {data.map(function(elem,idx){
            return <h3>{idx},{elem.author}</h3>
        })}
      </div>
    </div>
  )
}

export default ShowData
