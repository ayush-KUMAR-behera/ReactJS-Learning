import React, { useState } from 'react'

const FormHandlerUI = () => {


    const [title,setTitle]=useState('');

    const[submittedList,setSubmittedList]=useState([]);

    function submitHandler(e){
        e.preventDefault();

        if(!title.trim()) return;

        console.log("From submit by:",title);

        setSubmittedList((prev)=>[...prev,title]);

        setTitle('');
        
    }

  return (
    <div className='demo-container'>
      <h2>React Form Handling UI</h2>
      
      <form onSubmit={(e)=>submitHandler(e)} className='demo-from'>

        <input type="text"
        placeholder='Enter your name'
        onChange={(e)=>setTitle(e.target.value)}
        value={title}
        />

        <button type='submit'>Submit</button>
      </form>
    
    <div className='submitted-section'>
        <h3>Submissions:</h3>
        {submittedList.length === 0 ? (
          <p className="empty-text">No names submitted yet.</p>
        ) : (
          <ul className="name-list">
            {submittedList.map((name, index) => (
              <li key={index} className="name-chip">
                {name}
              </li>
            ))}
          </ul>
        )}
    </div>

    </div>
  )
}

export default FormHandlerUI
