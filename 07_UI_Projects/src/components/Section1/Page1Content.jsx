import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1Content = (props) => {
    // console.log(props);
    
    // console.log(props.users);
    
  return (
    <div className='py-10 flex gap-10 items-center justify-between h-[90vh] px-18'>
        <Leftcontent/>
        <Rightcontent users={props.users} />
    </div>
  )
}

export default Page1Content
