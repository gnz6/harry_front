import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import useLocalStorage from '../../hooks/useLocalStorage';
import {logUser, googleLogin, getUserByEmail} from "../../redux/slices/auth/authActions"

const Login = () => {
  
  
  const [input, setInput] = useState({ email: "", password: "" })
  // const google = window.google;
  // const [googleUser, setGoogleUser] = useLocalStorage("googleUser")
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  let auth = JSON.parse(localStorage.getItem("token"))

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(logUser(input.email, input.password))
    window.location.assign("http://127.0.0.1:5173/home")
  }

  // const handleCallbackResponse = async (response) => {
  //   var userObject = jwt_decode(response.credential)
  //   setGoogleUser(userObject)
  //   const userMail = userObject.email
  //   const name = userObject.given_name
  //   dispatch(googleLogin(userMail, name))
  //   navigate("/home")
  //   alert("Logged in, welcome!")
  //   window.location.assign("http://127.0.0.1:5173/home")
  // }

  // useEffect(() => {
  //   google.accounts.id.initialize({
  //     client_id: "758553709121-58epv7hm00lm517etb826bjli8qhdj88.apps.googleusercontent.com",
  //     callback: handleCallbackResponse
  //   })

  //   google.accounts.id.renderButton(
  //     document.getElementById("signInDiv"),
  //     { theme: "outline", size: "extra-large" }
  //   )
  // }, [googleUser])

  useEffect(()=>{
    if(auth) dispatch(getUserByEmail(auth.findUser._id))
  },[dispatch, auth])

  

  return (

    <div class="h-full w-full items-center justify-center text-center mt-[-50px] text-gray-200 z-0">
      <form onSubmit={handleSubmit} class="  h-screen flex flex-col items-center justify-center bg-black bg-opacity-50 p-8">
        <h1 class="text-4xl font-bold pt-6 pb-8">Login</h1>
        <input type="text" placeholder="Email" name="email" onChange={handleInputChange} class="text-center text-xl h-12 bg-transparent w-[300px] focus:bg-white focus:text-black focus:border-yellow-400 border-2 rounded-sm" />
        <br></br>
        <input type="password" placeholder="Password" name="password"  onChange={handleInputChange} class="text-center h-12 bg-transparent focus:bg-white focus:text-black focus:border-yellow-400 border-2 rounded-sm text-xl w-[300px] " />
        <button class=" border w-[220px] font-bold p-2 mt-6 text-black text-2xl bg-gray-400 rounded-md hover:bg-gray-200 transition duration-75 cursor-pointer" disabled={!input.email.length || input.password.length}>Login</button>
        <p class="mt-2">Or</p>
        {/* <button class=" border w-[220px] font-bold p-4 bg-slate-200 rounded-md">Login With Google</button> */}

        <h3 class="mt-4">Dont have an account?<NavLink to={"/register"}><span class="font-bold underline"> Register Here </span></NavLink></h3>

      </form>
    </div>
  )
}

export default Login