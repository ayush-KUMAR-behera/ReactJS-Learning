import React from 'react'

const Card = (props) => {
    console.log(props);
    
  return (
    <div>
       <a href={props.elem.url} target='_blank'>

          <div key={props.idx}>
          <div className='h-40 w-44 overflow-hidden'>
          <img className='h-full w-full object-cover bg-white rounded-xl' src={props.elem.download_url} alt="" />
        </div>
        <h2 className='text-center text-l'>{props.elem.author}</h2>
        </div>

        </a>
    </div>
  )
}

export default Card
