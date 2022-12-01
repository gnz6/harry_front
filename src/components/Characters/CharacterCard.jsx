import React from 'react'

const CharacterCard = ({name, image, species ,wizard, _id}) => {

  return (
    <div key={_id}>
        <h1>{name}</h1>
        <img src={image} alt={`${name} img`} />
        <p>{species}</p>
        <p>{wizard === true ? <p>Wizard</p> : <p>Muggle</p>}</p>

    </div>
  )
}

export default CharacterCard