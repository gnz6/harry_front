import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCharacters } from "../../redux/slices/characters/characterActions"
import CharacterCard from './CharacterCard'

const Characters = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCharacters())
  }, [dispatch])

  const [currentPage, setCurrentPage] = useState(0)
  const [search, setSearch] = useState("")
  const allCharacters = useSelector(state => state.characters.allChars)


  const charsInPage = () => {
    if (search.length === 0) return allCharacters.slice(currentPage, currentPage + 6)

    const filteredChars = allCharacters.filter(character => character.name.toLowerCase().includes(search.toLowerCase()))
    return filteredChars.slice(currentPage, currentPage + 6)
  }

  const nextPage = () => {
    if (allCharacters.filter(character => character.name.includes(search)).length > currentPage + 6) {
      setCurrentPage(currentPage + 6)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 6)
    }
  }

  const handleReload = (e) => {
    e.preventDefault();
    dispatch(getAllCharacters())
    setCurrentPage(0)
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setCurrentPage(0)
  }
  console.log(allCharacters);




  return (
    <div>
      <h1>Characters</h1>
      {!allCharacters.length ?
        <div>
          <h1>Loading...</h1>
        </div>
        :
        <div>
          {charsInPage()[0]?
            <div>
              {charsInPage().map(c=>{
                return(
                  <CharacterCard
                  key={c._id}
                  name={c.name}
                  image={c.image}
                  species={c.species}
                  wizard={c.wizard}
                  />
                )
              })}
            </div>
            :
            <div>
              <h1>No characters found</h1>
            </div>}
        </div>
      }

    </div>
  )
}

export default Characters