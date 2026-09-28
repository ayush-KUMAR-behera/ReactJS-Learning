import React from 'react'
import RightCard from './RightCard'

const Rightcontent = (props) => {
    // console.log(props.users);
    
        return (
    <div id='right' className='h-full w-2/3  px-6 py-4 flex gap-5 flex-nowrap overflow-x-auto '>
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color}/>
      })}
    </div>
  )
}

export default Rightcontent
