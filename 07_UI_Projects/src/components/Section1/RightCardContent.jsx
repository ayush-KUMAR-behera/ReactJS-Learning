import React from 'react'

const RightCardContent = (props) => {
  return (
    
      <div className='absolute top-0 left-0 h-full w-full  flex flex-col justify-between  px-6 py-4 '>

        <h1 className='bg-white rounded-full h-10 w-10 flex justify-center items-center font-semibold'>{props.id+1}</h1>
        <div>
            <p className='text-white font-semibold mt-33'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab asperiores sapiente perspiciatis hic at quas ducimus. Consectetur, tempore!</p>
        </div>

            <div className='flex  justify-between'>
                <button style={{backgroundColor:props.color}} className='px-4 py-2 rounded-full text-l text-white font-semibold'>{props.tag}</button>
                <button style={{backgroundColor:props.color}} className=' px-4 py-2 rounded-full text-l text-white font-semibold'><i class="ri-arrow-right-line"></i></button>
            </div>

      </div>
  )
}

export default RightCardContent
