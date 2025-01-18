import React, { useState } from 'react'

function Login() {

    const [form,setForm] = useState({})

    const handleSubmit = async(e) =>{
        e.preventDefault(); 
        const responseGet = await fetch('http://localhost:8080/demo',{
            method : 'POST',
            body : JSON.stringify(form),
            headers : {
              'Content-Type' : 'application/json'
            }
        });
        const result = await responseGet.json(); 
        console.log(result)
        // console.log(form)
        console.log(responseGet)
    }

    const handleForm = (e) => {
        setForm({
            ...form,[e.target.name] : e.target.value
        });
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>username</span>
        <input type="text" name="username" onChange={handleForm}></input>
        <span>password</span>
        <input type="text" name="password" onChange={handleForm}></input>
        <input type="submit"></input>
      </form>
      <div>
        {/* <ul>
          {users.map(user=><li key={user._id}>{user.username},{user.password}</li>)}
        </ul> */}
      </div>
    </div>
  )
}

export default Login
