import React from 'react'
import { useState } from 'react';

function App() {

  const [registerFromData,setRegisterFormData]=useState({
    username:"",
    name:"",
    password:""

  });

  const handleRegister=async (e)=>{
    e.preventDefault();

    const registerBody={
      username:registerFromData.username,
      name:registerFromData.name,
      password:registerFromData.password
    };

    const response=await fetch('http://localhost:3001/api/users',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(registerBody)
    });

    const data=await response.json();

    if(response.status === 200){
      console.log('user created successfully');
      console.log(data);
    }else{
      console.log('Error creating user');
      console.log(data);
    }
  }


  return (
    <div>
        <h2>Notes Application</h2>
        <form onSubmit={handleRegister}>
            <div>
                <input
                    type="email"
                    placeholder='Email..,'
                    value={registerFromData.username}
                    onChange={(e)=>setRegisterFormData({
                      ...registerFromData,username:e.target.value
                    })}
                    required

                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="full name"
                    value={registerFromData.name}
                    onChange={(e)=>setRegisterFormData({
                      ...registerFromData,name:e.target.value
                    })}
                    required
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder='password..,'
                    value={registerFromData.password}
                    onChange={(e)=>setRegisterFormData({
                      ...registerFromData,password:e.target.value
                    })}
                    required
                />
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default App;
