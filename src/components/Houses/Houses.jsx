import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { getAllHouses } from '../../redux/slices/houses/houseActions'
import HouseCard from "./HouseCard"
import gryffindor from "../../assets/Gryffindor.webp"
import huffle from "../../assets/Hufflepuff.webp"
import raven from "../../assets/RavenclawCrest.webp"
import slytherin from "../../assets/Slytherin.webp"

const Houses = () => {

  const dispatch = useDispatch()
  const houses = useSelector(state => state.houses.allHouses)

  useEffect(() => {
    dispatch(getAllHouses())
  }, [dispatch])

  // console.log(houses);

  return (
    <div class="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full bg-black bg-opacity-50 rounded-sm">
      <div class="pb-8">
        <h1 class="text-gray-100 font-bold justify-center text-center align-middle items-center text-5xl"> Hogwarts Houses </h1>
        {
          houses ?
            <div class="text-white text-lg flex p-8 ">
              {houses?.map(house => {
                return (
                  <div key={house.name} class="flex  flex-col p-6 bg-white  border-2 m-2 rounded-lg  items-center justify-center h-[400px] w-[300px] hover:scale-105 hover:border-yellow-400 transition duration-200">
                    <div>

                      <h1 class="text-4xl font-bold text-black  text-center p-4">{house.name}</h1>

                      {
                        house.name === "Gryffindor" ?
                          <div>
                            <img src={gryffindor} />
                          </div>
                          :
                          house.name === "Hufflepuff" ?
                            <div>
                              <img src={huffle} />
                            </div>
                            :
                            house.name === "Ravenclaw" ?
                              <div>
                                <img src={raven} />
                              </div>
                              :
                              house.name === "Slytherin" ?
                                <div>
                                  <img src={slytherin} />
                                </div> :
                                null
                      }
                      {/* <img style={{ heigth: "200px" }} src={house.image} /> */}
                    </div>
                    <NavLink to={`/houseDetail/${house.name}`}>
                      <button class="bg-yellow-500 p-2 border-2 rounded-lg text-red-800 border-red-900 font-bold hover:bg-red-800 hover:text-white active:text-yellow-500 transition duration-150">See More</button>
                    </NavLink>

                  </div>
                )
              })}
            </div> :
            <div>

            </div>
        }


      </div>
    </div>
  )
}

export default Houses