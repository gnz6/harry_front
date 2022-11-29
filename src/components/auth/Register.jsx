import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../redux/slices/auth/authActions'
import { NavLink, useNavigate } from 'react-router-dom'
import gryffindor from "../../assets/Gryffindor.webp"
import huffle from "../../assets/Hufflepuff.webp"
import raven from "../../assets/RavenclawCrest.webp"
import slytherin from "../../assets/Slytherin.webp"

const Register = () => {

  const [input, setInput] = useState({
    name: "", email: "", password: "", confirmPassword: "", house: ""
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(input.name, input.email, input.house, input.password, input.confirmPassword))
    alert(`Welcome to ${input.house}, ${input.name} \n please login to continue`)
    navigate("/login")
  }

  const handleLogin = (e) => {
    navigate("/login")
  }


  return (
    <div class="h-full w-full items-center justify-center text-center mt-[-50px] text-gray-200 z-0">
      <form onSubmit={handleSubmit} class="  h-screen flex flex-col items-center justify-center bg-black bg-opacity-50 p-8">
        <h1 class="text-4xl font-bold pt-6 pb-8">Register Wizard</h1>

        <input type="text" placeholder="Name" name="name" onChange={handleInputChange} class="text-center text-xl h-12 bg-transparent w-[300px] focus:bg-slate-300 focus:text-black focus:border-yellow-400 border-2 rounded-sm" />
        <br></br>
        <input type="text" placeholder="Email" name="email" onChange={handleInputChange} class="text-center text-xl h-12 bg-transparent w-[300px] focus:bg-slate-300 focus:text-black focus:border-yellow-400 border-2 rounded-sm" />
        <br></br>
        <input type="password" placeholder="Password" name="password" onChange={handleInputChange} class="text-center h-12 bg-transparent focus:bg-slate-300 focus:text-black focus:border-yellow-400 border-2 rounded-sm text-xl w-[300px] " />
        <br></br>
        <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={handleInputChange} class="text-center text-xl h-12 bg-transparent w-[300px] focus:bg-slate-300 focus:text-black focus:border-yellow-400 border-2 rounded-sm" />
        <br></br>

    <div class="text-center text-2xl items-center justify-center bg-white text-black font-bold w-[600px] h-[300px]  focus:text-black  rounded-sm border-8 border-yellow-400 ">

        <label class="">
          <h1>Select house</h1>
          <div class="flex justify-center">
              <label class="form-check-label inline-block text-gray-400 hover:text-black transition duration-100" for="gryffindor">Gryffindor
            <div class="form-check form-check-inline">
              <input class=" form-check-input form-check-input appearance-none rounded-full h-4 w-4  bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1  align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="house" id="gryffindor" value="gryffindor" />
              <img src={gryffindor} alt="Gryffindor Logo"  style={{ width: "150px", heigth: "150px" }}/>
            </div>
              </label>
            
              <label class="form-check-label inline-block text-gray-400 hover:text-black transition duration-100" for="hufflepuff">Hufflepuff
            <div class="form-check form-check-inline">
              <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-yellow-400 checked:border-yellow-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="house" id="hufflepuff" value="hufflepuff"  />
              <img src={huffle} alt="hufflepuff Logo"  style={{ width: "147px", heigth: "149px" }}/>
            </div>
              </label>

              <label class="form-check-label inline-block text-gray-400 hover:text-black transition duration-100" for="ravenclaw">Ravenclaw
            <div class="form-check form-check-inline">
              <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="house" id="ravenclaw" value="ravenclaw" />
              <img src={raven} alt="Ravenclaw Logo"  style={{ width: "150px", heigth: "150px" }}/>
            </div>
              </label>

              <label class="form-check-label inline-block text-gray-400 hover:text-black transition duration-100" for="slytherin">Slytherin
            <div class="form-check form-check-inline">
              <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-600 checked:border-green-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="house" id="slytherin" value="slytherin" />
              <img src={slytherin} alt="slytherin Logo"  style={{ width: "150px", heigth: "150px" }}/>
            </div>
              </label>
          </div>
        </label>
    </div>

        <button class=" border w-[220px] font-bold p-2 mt-6 text-black text-2xl bg-gray-400 rounded-md hover:bg-gray-200 transition duration-75 cursor-pointer" disabled={!input.email.length || input.password.length}>Register</button>
        <p class="mt-2">Or</p>
        {/* <button class=" border w-[220px] font-bold p-4 bg-slate-200 rounded-md">Login With Google</button> */}

        <h3 class="mt-4">Already registered?<NavLink to={"/login"}><span class="font-bold underline"> Login Here </span></NavLink></h3>

      </form>
    </div>
  )
}

export default Register