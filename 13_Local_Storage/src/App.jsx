import React from 'react'

const App = () => {
/*
  localStorage.clear();
  localStorage.setItem('name','Ayush');
  localStorage.setItem('age',22);
  const name=localStorage.getItem('name');
  const age=localStorage.getItem('age');
  console.log(name,age);
  localStorage.removeItem('age');
  */

  const user={
    name:"Ayush",
    role:"SDE2"
  }

  localStorage.setItem('user',JSON.stringify(user));
  const users=localStorage.getItem('user');
  console.log(users);
  console.log(typeof users);
  
  const details=JSON.parse(localStorage.getItem('user'));
  console.log(details);
  console.log(typeof details);
  
  
  

  return (
    <div className='card'>
      localStorage is a built-in web API that allows you to store data directly in the user's browser. This data stays saved even if the user refreshes the page or closes the browser entirely
    </div>
  )
}

export default App
