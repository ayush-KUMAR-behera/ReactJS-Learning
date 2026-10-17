import React from 'react'
import axios from 'axios' 
import ShowData from './ShowData';

const App = () => {

// async function getData() {
//     const response=await fetch('https://jsonplaceholder.typicode.com/todos');
//     const data=await response.json(); 
//     console.log(data);
    
//   }

const getData = async ()=>{
  // const response=await axios.get('https://jsonplaceholder.typicode.com/users');
  const {data}=await axios.get('https://jsonplaceholder.typicode.com/users');
  // console.log(response.data);
  console.log(data);
  
  
}

  return (
    <div>
      {/* <button onClick={getData}>Get Data</button>  
           */}
        <ShowData/>   
    </div>
  )
}

export default App
