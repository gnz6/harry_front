import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getHouse } from '../../redux/slices/houses/houseActions'

const HouseDetail = () => {

  const { houseName } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHouse(houseName))
  }, [dispatch, houseName])

  let houseDetail = useSelector((state) => state.houses.house)
  let house = houseDetail.house || "";
  // let {staff} = houseDetail

  console.log(houseDetail);
  return (
    <div className='w-fit h-max bg-black bg-opacity-80 text-white'>
      {!house[0] ?
        <div>
          <h1>Loading....</h1>

        </div>
        :
        <div className=' flex-col p-6'>
          <div className='items-center justify-center text-center'>
            <h1 className='text-4xl'>{house[0].name}</h1>
            <h4>Animal: {house[0].animal}</h4>
            <h4>Colours: {house[0].houseColor}</h4>
          </div>

          <div className='flex'>

            <div className=' w-1/2'>
              <img src={house[0].image} alt="houseShield" />
              <p>{house[0].description}</p>
            </div>
            <div className='w-1/2 '>
              <img src={house[0].founder.img} alt="house founder" />
              <h3>Founder : {house[0].founder.name}</h3>
            </div>
          </div>
        <hr/>

          <div>

            <h2 className='text-3xl'>{`${house[0].name} staff:`}</h2>
            {houseDetail.staff?.map(s => (
              <h3>{s.name}</h3>
            ))}
          </div>

          <div>
            <h3 className='text-3xl'>Notable Students:</h3>
            {houseDetail.students.map(s => (
              <h3>{s.name}</h3>
            ))}
          </div>
        </div>
      }
    </div>
  )
}

export default HouseDetail