import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import useLocalStorage from "../../hooks/useLocalStorage.js"
import { useNavigate } from "react-router-dom"
import gryffindor from "../../assets/Gryffindor.webp"

const UserNav = () => {

  const auth = JSON.parse(localStorage.getItem("token"))
  // const googleAuth = JSON.parse(localStorage.getItem("googleUser"))
  // const [googleUser, setGoogleUser] = useLocalStorage("googleUser")
  const [localUser, setLocalUser] = useLocalStorage("localUser")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [tab, setTab] = useLocalStorage("tab")


  const handleLogout = (e) => {
    e.preventDefault()
    // setGoogleUser(null)
    setLocalUser(null)
    window.location.reload()
  }

  useEffect(() => {
  }, [dispatch, auth])


  const handleLogin = (e)=>{
    setTab("login")
    navigate("/login")
    window.location.reload()

  }

  const handleRegister = (e)=>{
    setTab("register")
    navigate("/register")
    window.location.reload()

  }


  console.log(localUser);

  return (
    <div class="pt-24 pb-12">
      <nav class="hidden md:flex items-center  justify-center w-full md:h-[50px] md:bg-gradient-to-t from-yellow-800 via-yellow-400 to-amber-500 z-10">
        {/* logged con usuario + avatar + casa : guest login + register */}
        {
          localUser ?
            <div class="flex items-center justify-center font-bold text-2xl">
              <img src={gryffindor} style={{ width: "35px", heigth: "35px" }} class="mx-4 "/>
              <h1 class="mx-4 hover:text-white transition duration-200">Gonzalo Pirovano</h1>
              <h1 class="mx-4 hover:text-white transition duration-200">Favs</h1>
              <button onClick={handleLogout} class="mx-4 hover:text-white transition duration-200">Logout</button>
            </div>
            :
            <div class="flex flex-row  text-xl font-bold">

              <button onClick={handleLogin} class="text-3xl text-gray-700 hover:text-black cursor:pointer mx-4" >Login</button>
              <button onClick={handleRegister}  class="text-3xl text-gray-700 hover:text-black cursor:pointer mx-4" >Register</button>
            </div>
        }
      </nav>



    </div>
  )
}

export default UserNav