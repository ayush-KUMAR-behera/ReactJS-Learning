import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div>
      <Card name="Ayush" age={22} image='https://avatars.githubusercontent.com/u/188958692?v=4'/>
      <Card name="Snajay" age={21} iamge='https://media.licdn.com/dms/image/v2/D5635AQG4QXiTlDoSCA/profile-framedphoto-shrink_400_400/B56Z_h2gBuG0Ac-/0/1786200588938?e=1790406000&v=beta&t=H1293Bv59cu0lH5cHfvh9dK4jlKAOhhSvCPWLyj_-f4'/>
      <Card name="Ashish" age={25} image='https://media.licdn.com/dms/image/v2/D5603AQHhm71qVCtiXQ/profile-displayphoto-scale_400_400/B56Z2ceWMZKEAk-/0/1776446696499?e=1791417600&v=beta&t=nveiQNP41ATP_hUci8lHoS3xeGQv3rmp5C3-MVfK-wg'/>
    </div>
  )
}

export default App
