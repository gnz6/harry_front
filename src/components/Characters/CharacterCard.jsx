import React from 'react'

const CharacterCard = ({ name, image, species, wizard, _id }) => {

  return (
    <div key={_id} className="text-white text-2xl border-2 bg-black bg-opacity-80 border-white text-center flex-wrap">
      <h1 className=' font-bold'>{name}</h1>
      <img src={image} alt={`${name} img`} className="w-[300px] h-[300px]  items-center justify-center p-4" />
      <div className='flex justify-evenly'>
        <p>{species}</p>
        <p>{wizard === true ? <p>Wizard</p> : <p>Muggle</p>}</p>
      </div>

    </div>
  )
}

export default CharacterCard