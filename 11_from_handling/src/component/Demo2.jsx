import React, { useState } from 'react'

const Demo2 = () => {

    const[title,setTitle]=useState();

    function submitHandler(e){
        e.preventDefault();
        console.log("from submit by:",title);
        setTitle('')
    }

  return (
    <div>
       <form onSubmit={(e)=>{submitHandler(e)}}>
      <input type="text"
       placeholder='eneter your name'
       onChange={(e)=>{setTitle(e.target.value)}}
       value={title} />  
      <button type='submit'>Submit</button>
      </form> 
    </div>
  )
}

export default Demo2




