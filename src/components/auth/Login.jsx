import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  
  
  const [input, setInput] = useState({ email: "", password: "" })

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  return (

    <div class="h-full w-full items-center justify-center text-center">
      <form class="border-8  h-full flex flex-col items-center justify-center bg-orange-100 p-8">
        <h1 class="text-4xl font-bold pt-6 pb-8">Login</h1>
        <input type="text" placeholder="Email" name="email" onChange={handleInputChange} class="text-center text-xl" />
        <br></br>
        <input type="password" placeholder="Password" name="password"  onChange={handleInputChange} class="text-center text-xl focus:text-2xl" />
        <button class=" border w-[220px] font-bold p-4 mt-6 bg-slate-200 rounded-md">Login</button>
        <p>Or</p>
        <button class=" border w-[220px] font-bold p-4 bg-slate-200 rounded-md">Login With Google</button>
        <h3 class="mt-4">Dont have an account?<NavLink to={"/register"}><span class="font-bold underline"> Register Here </span></NavLink></h3>

      </form>
    </div>
  )
}

export default Login