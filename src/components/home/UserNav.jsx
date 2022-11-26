import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import useLocalStorage from "../../hooks/useLocalStorage.js"
import {NavLink} from "react-router-dom"

const UserNav = () => {

    const auth = JSON.parse(localStorage.getItem("token"))
    // const googleAuth = JSON.parse(localStorage.getItem("googleUser"))
    const [googleUser, setGoogleUser] = useLocalStorage("googleUser")
    const [localUser, setLocalUser] = useLocalStorage("localUser")
    const dispatch = useDispatch()


    const handleLogout = (e) => {
        e.preventDefault()
        setGoogleUser(null)
        setLocalUser(null)
        window.location.reload()
      }
    
      useEffect(() => {
      }, [dispatch, auth])
    
    
  
  
    return (
    <div class="pt-24">
        <nav class="w-full h-[50px] bg-gradient-to-t from-yellow-800 via-yellow-400 to-amber-500">
        {/* logged con usuario + avatar + casa : guest login + register */}
        </nav>


{/* 

                 <div class="flex">

            <p onClick={handleLogout} class='font-bold text-lg p-4 mt-10   rounded-md border-b-none hover:cursor-pointer hover:bg-black hover:bg-opacity-10 hover:text-red-700'>Logout</p>

          </div>

        <div class="flex">
            <button onClick={()=>setTab("login")} class={`${tab !== "login" ? 'font-bold text-lg p-4 mt-10 border-x-4 border-t-4 border-yellow-500 rounded-md border-b-none hover:bg-yellow-500 transition duration-100 hover:text-black' : "font-bold text-xl p-4 mt-11 border-x-4 border-t-4 border-yellow-500 rounded-md border-b-none bg-yellow-500 text-red-900 "}`}> Login </button>
            <button onClick={()=>setTab("register")} class={`${tab !== "register" ? 'font-bold text-lg p-4 mt-10 border-x-4 border-t-4 border-yellow-500 rounded-md border-b-none hover:bg-yellow-500 transition duration-100 hover:text-black' : "font-bold text-xl p-4 mt-11 border-x-4 border-t-4 border-yellow-500 rounded-md border-b-none bg-yellow-500 text-red-900 "}`}> Register</button>
          </div> */}


    </div>
  )
}

export default UserNav