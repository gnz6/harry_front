import React from 'react'

const Buttons = ({prevPage, nextPage ,handleReload}) => {
  return (
    <div className='flex items-center p-2 w-screen justify-center text-2xl text-white m-4'>
        <button className='w-[130px] h-[75px] border-4 bg-black bg-opacity-70 rounded-md m-2 ' onClick={prevPage}>Previous</button>
        <button className='w-[130px] h-[75px] border-4 bg-black bg-opacity-70 rounded-md m-2 ' onClick={handleReload}>Reload Characters</button>
        <button className='w-[130px] h-[75px] border-4 bg-black bg-opacity-70 rounded-md m-2 ' onClick={nextPage}>Next</button>
    </div>
  )
}

export default Buttons