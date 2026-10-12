import React, { useState } from 'react'

const App = () => {

  const[title,setTitle]=useState('');
  const[details,setDetails]=useState('');
  const[task,setTask]=useState([]);

  const sumbitHandler=(e)=>{
    e.preventDefault();

    
    if (!title.trim()) return;

    
    setTask([...task, { title, details }]);
    
    setTitle('');
    setDetails('');
  }

  
  const deleteHandler = (indexToDelete) => {
    const updatedTasks = task.filter((_, idx) => idx !== indexToDelete);
    setTask(updatedTasks);
  };

  return (
    <div className='min-h-screen bg-black text-white p-10 lg:flex'>
      
      <form 
        onSubmit={sumbitHandler}
        className='flex items-start flex-col gap-5 p-10 lg:w-1/2'>

        <h1 className='text-3xl font-bold'>Add Notes</h1>

        <input 
          type="text"
          placeholder='Enter Notes Heading'
          className='p-5 py-2 rounded border-2 w-full outline-none font-bold bg-transparent text-white'
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <textarea
          placeholder='Enter Details'
          className='px-5 h-32 py-2 border-2 rounded w-full outline-none font-semibold bg-transparent text-white'
          value={details}
          onChange={(e)=>{setDetails(e.target.value)}}
        />

        <button className='bg-white text-black px-5 py-2 rounded w-full outline-none font-semibold active:bg-gray-300 active:scale-95 transition'>
          Add Notes
        </button>

      </form>   

      <div className='p-10 lg:w-1/2 lg:border-l-2 border-neutral-800'>
        <h1 className='font-bold text-3xl mb-4'>Recent Notes</h1>
        
        <div className='flex flex-wrap items-start justify-start gap-5 overflow-auto max-h-[75vh]'>
          
          {task.length === 0 ? (
            <p className='text-gray-500 italic'>No notes created yet.</p>
          ) : (
            task.map((elem, idx) => (
              <div 
                key={idx} 
                className="relative h-60 w-44 rounded-2xl bg-amber-50 p-4 flex flex-col justify-between shadow-lg text-black overflow-hidden"
              >
              
                <button
                  onClick={() => deleteHandler(idx)}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold cursor-pointer transition shadow"
                  title="Delete Note"
                >
                  ✕
                </button>

                <div className="pr-5 overflow-y-auto">
                  <h3 className='leading-snug text-lg font-bold break-words'>{elem.title}</h3>
                  <p className='leading-snug text-sm text-gray-700 font-medium mt-2 break-words'>{elem.details}</p>
                </div>

                <span className="text-[10px] text-gray-400 font-mono">Note #{idx + 1}</span>
              </div> 
            ))
          )}

        </div>
      </div>

    </div>
  )
}

export default App