import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import logoedited from "../../assets/logoedited.png"
import useLocalStorage from "../../hooks/useLocalStorage.js"
import { FaBars, FaTimes } from "react-icons/fa"
import {NavLink} from "react-router-dom"

const Nav = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)


  const [tab, setTab] = useLocalStorage("tab")
   let logged = false

  
  return (
    <nav class=" z-0 fixed w-full h-[100px] flex justify-evenly items-center px-4 bg-[#742a2a] text-yellow-500 border-b-8 border-b-yellow-500 ">
      
      <div class="flex w-1/3 pt-2 ml-[-100px] mt-4 p-6">
        <img src={logoedited} alt="Daily Prophet" style={{ width: "90px", heigth: "90px" }} />
        <h1 class="text-gray-100 text-4xl items-center justify-center text-left mt-[20px]"><span class="text-yellow-500">D</span>aily <span class="text-yellow-500">P</span>rophet</h1>
      </div>
      <div class='hidden md:flex mr-[-120px]'>
        {/* aca puedo usar los LINK de react scroll con, veremos */}
        <button onClick={()=>setTab("home")} class={`${tab !== "home" ? 'font-bold text-lg p-4 mt-10 border-x-4 border-t-4 border-yellow-500 rounded-md border-b-none hover:bg-yellow-500 transition duration-100 hover:text-black' : "font-bold text-xl p-4 mt-11 border-x-4 border-t-4 border-yellow-500 rounded-md border-b-none bg-yellow-500 text-red-900 "}`}   > <NavLink to={"/"}>Home</NavLink></button>
        <button onClick={()=>setTab("houses")} class={`${tab !== "houses" ? 'font-bold text-lg p-4 mt-10 border-x-4 border-t-4 border-yellow-500 rounded-md border-b-none hover:bg-yellow-500 transition duration-100 hover:text-black' : "font-bold text-xl p-4 mt-11 border-x-4 border-t-4 border-yellow-500 rounded-md border-b-none bg-yellow-500 text-red-900 "}`}> <NavLink to={"/houses"}>Houses</NavLink></button>
        <button onClick={()=>setTab("characters")} class={`${tab !== "characters" ? 'font-bold text-lg p-4 mt-10 border-x-4 border-t-4 border-yellow-500 rounded-md border-b-none hover:bg-yellow-500 transition duration-100 hover:text-black' : "font-bold text-xl p-4 mt-11 border-x-4 border-t-4 border-yellow-500 rounded-md border-b-none bg-yellow-500 text-red-900 "}`}><NavLink to={"/characters"}> Characters </NavLink></button>
        <button onClick={()=>setTab("spells")} class={`${tab !== "spells" ? 'font-bold text-lg p-4 mt-10 border-x-4 border-t-4 border-yellow-500 rounded-md border-b-none hover:bg-yellow-500 transition duration-100 hover:text-black' : "font-bold text-xl p-4 mt-11 border-x-4 border-t-4 border-yellow-500 rounded-md border-b-none bg-yellow-500 text-red-900 "}`}><NavLink to={"/spells"}>Spells</NavLink></button>
    
      </div>


      <div onClick={handleClick} class="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <div class={!nav? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#742a2a] flex flex-col justify-center items-center"}>
      <h2 class="mb-4 py-4 text-4xl font-bold">Search:</h2>
          <p class='py-4 text-3xl text-white font-bold'> <NavLink to={"/houses"}> Houses 🏠</NavLink></p>
          <p class='py-4 text-3xl text-white font-bold'> <NavLink to={"/characters"}>Characters 🧙🏼‍♂️🧙🏼‍♀️</NavLink> </p>
          <p class='py-4 text-3xl text-white font-bold'> <NavLink to={"/spells"}>Spells 🔮</NavLink> </p>
          {/* Logged In */}
          {logged?
        <div>
          <p class='py-4 text-4xl font-bold '>
              <h2 class="mb-4">Create:</h2>
              <p class="py-4 text-3xl text-white"><NavLink to={"/createWizard"}>Wizard 🧙🏼‍♂️ </NavLink></p>
              <p class="py-4 text-3xl text-white"><NavLink to={"/createSpell"}>Spell 🪄</NavLink></p>
          </p>
          <p class='py-4 text-4xl font-bold'>Logout ❌</p>
        </div> :
        <div>
          <p class='py-4 text-4xl font-bold'><NavLink to={"/login"}>Login ✅</NavLink></p>
          <p class='py-4 text-4xl font-bold'> <NavLink to={"/register"}>Register 🖊️</NavLink></p>

        </div>
        }
      </div>

    </nav>
  )
}

export default Nav