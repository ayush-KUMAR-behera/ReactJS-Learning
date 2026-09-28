import Section1 from "./components/Section1/Section1"



const App=()=>{
  const users=[
    {
      img:'https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Satisfied',
      color:'blue'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661515449711-ace459054f78?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Underserved',
      color:'hotpink'
    },
    {
      img:'https://images.unsplash.com/photo-1762341120638-b5b9358ef571?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Under banked',
      color:'red'
    }
    ,
    {
      img:'https://images.unsplash.com/photo-1771244678811-50c22f17c791?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Unavilabel',
      color:'brown'
    }
     ,
    {
      img:'https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Termendious',
      color:'orange'
    },
    {
      img:'https://avatars.githubusercontent.com/u/188958692?v=4',
      intro:'',
      tag:'Java FSD',
      color:'orange'
    }
  ]
  return(
    <div>
  <Section1 users={users}/>
  </div>
  )
}

export default App