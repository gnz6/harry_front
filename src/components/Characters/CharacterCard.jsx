import React from 'react'
import {NavLink} from "react-router-dom"

const CharacterCard = ({ name, image, species, wizard, _id }) => {

  const capitalLetter = (str) => {
    if (str[0] === str[0].toLowerCase()) {
      let arr = str.split("")
      arr[0] = arr[0].toUpperCase()
      return arr.join("")
    }
  }

  return (
    <div key={_id} className="text-white text-2xl border-2 bg-black bg-opacity-80 border-yellow-500 m-2 text-center flex-wrap rounded-lg">
      <NavLink to={`/character/${_id}`}>

        <h1 className=' font-bold'>{name}</h1>
        {image.length ?
          <img src={image} alt={`${name} img`} className="w-[250px] h-[300px]  items-center justify-center p-4" />
          :
          <p className="w-[250px] h-[300px] justify-center items-center text-center">No photo of {name} registered.</p>
        }
        <div className='flex justify-evenly'>
          <p>{wizard === true ? <p>Wizard</p> : <p>Muggle</p>}</p>
          <p>{capitalLetter(species)}</p>
        </div>

      </NavLink>
    </div>
  )
}

export default CharacterCard