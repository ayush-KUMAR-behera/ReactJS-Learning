import React, { useState } from 'react'

const App = () => {

  const[num,Setnum]=useState(12123)
  const changeNum=()=>{
    Setnum(20)
    // console.log(num+"inside Fun");
    
  }
  // console.log(num);
  

  const[user,Setuser]=useState({name:"Ayush",age:22});

  function changeObj(){
    const newUser={...user} ;
    newUser.name="Bandita";
    newUser.age=21
    Setuser(newUser);
  }


  const[arr,Setarr]=useState([5,10,15]);
  function changeArr(){
    const newArr=[...arr];
    newArr.push(99);
    console.log(newArr);
    console.log(arr);
    Setarr(newArr)
    
  }

  const[ele,Setele]=useState(10);
  function changeEle(){
    const newEle=ele;
    console.log(newEle);
    console.log(ele);
    
  }

  const[obj2,Setobj2]=useState({name:"Raja",role:"Teacher"});

  function changeObj2(){
    Setobj2(prev=>({...obj2,role:"Student"}))
  }


  const[number,setnumber]=useState(0);


  // Batch update
  function batchUpdate(){
  // setnumber(number+1);
  // setnumber(number+1)
    setnumber(number=>number+1);
    setnumber(number=>number+1);
  }

  return (
    <div>
      {/* <h1>The Value is: {num}</h1> */}
      {/* <h1>{user.name},{user.age}</h1> */}
      {/* <h1>The arr value: {arr}</h1> */}
      {/* <h1>The value of obj2: Name-{obj2.name} & role-{obj2.role}</h1> */}
      <h1>{number}</h1>
      <button onClick={batchUpdate}>Click Here</button>
    </div>
  )
}

export default App
