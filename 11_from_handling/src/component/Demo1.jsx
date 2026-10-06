import React from 'react'

const Demo1 = () => {
  function submitHandler(e){
    e.preventDefault();
    console.log("From submited");
  }

  return (
    <div>
      <form onSubmit={(e)=>submitHandler(e)}>
        <input type="text" placeholder='enter your name'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}


export default Demo1
