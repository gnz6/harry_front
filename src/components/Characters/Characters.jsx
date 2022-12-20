import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCharacters } from "../../redux/slices/characters/characterActions"
import CharacterCard from './CharacterCard'
import { AiOutlineArrowLeft , AiOutlineArrowRight } from "react-icons/ai"

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
    <div className='bg-black bg-opacity-50 h-full w-full items-center justify-center text-center mt-[-50px] text-gray-200 z-0'>
      <h1 className='text-white text-5xl p-4 font-bold' >Characters</h1>
      {/* <Buttons prevPage={prevPage} nextPage={nextPage} handleReload={handleReload}/>      */}
      <i class="fa fa-arrow-right" aria-hidden="true"></i>

      {!allCharacters.length ?
        <div>
          <h1>Loading...</h1>
        </div>
        :
        <div className='w-full flex'>
          <div  className='w-1/6  h-screen'>
          <AiOutlineArrowLeft className='w-full h-[100px]  items-center justify-center mt-[130%] mr-[-50px]  hover:cursor-pointer ' onClick={prevPage}/>

          </div>
          {charsInPage()[0]?
            <div className='flex flex-wrap  items-center justify-between p-2 w-4/6'>
              {charsInPage().map(c=>{
                return(
                  <CharacterCard 
                  key={c._id}
                  _id={c._id}
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
            <div className='w-1/6  h-screen'>
              <AiOutlineArrowRight className='w-full h-[100px]  items-center justify-center mt-[130%] ml-[-50px]  hover:cursor-pointer ' onClick={nextPage}/>
            </div>
              {/* <button >{AiOutlineArrowRight}</button> */}
        </div>
      }

    </div>
  )
}

export default Characters