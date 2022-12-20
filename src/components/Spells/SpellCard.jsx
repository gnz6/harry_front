import React from 'react'
import { NavLink } from 'react-router-dom'

const SpellCard = ({_id, name, description}) => {

  const shortenDescription = (text)=>{
    if(text.length > 50){
      return text.slice(0,100)+"..."
    }
    return text
  }

  return (
    <>
      <NavLink className="border-2 border-yellow-500 h-[150px] bg-black bg-opacity-80 p-2 w-[250px] m-4 items-center justify-center text-center" to={`/spell/${_id}`}>
        <h1 className='font-bold text-2xl text-yellow-500'>{name}</h1>
        <h4>{shortenDescription(description)}</h4>
      </NavLink>
    </>
  )
}

export default SpellCard