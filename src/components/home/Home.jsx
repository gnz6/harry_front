import React from 'react'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <div class=" w-screen h-screen">
      <div className='bg-black bg-opacity-50 h-full w-full items-center justify-center text-center mt-[-50px] text-gray-200 z-0'>
        <h1 className='text-white text-5xl p-4 font-bold mb-2' > Welcome To Hogwarts Express!</h1>
        <h3 className='text-white text-3xl p-4 font-bold mb-8'>Select the Category you want to Search</h3>
        <div className='w-full p-8 h-full'>
          <NavLink to={"/houses"} className="text-3xl mx-8 border-2 text-white hover:text-yellow-500 transition duration-200 bg-black bg-opacity-80 mt-[100px] p-8 rounded-lg">Houses</NavLink>
          <NavLink to={"/characters"} className="text-3xl mx-8 border-2 text-white hover:text-yellow-500 transition duration-200 bg-black bg-opacity-80 mt-[100px] p-8 rounded-lg">Characters</NavLink>
          <NavLink to={"/spells"} className="text-3xl mx-8 border-2 text-white hover:text-yellow-500 transition duration-200 bg-black bg-opacity-80 mt-[100px] p-8 rounded-lg">Spells</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home