import { allHouses, showHouse } from "./houseSlice";
import axios from "axios";

export const getAllHouses = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/api/houses")
      .then((info) => dispatch(allHouses(info.data)))
      .catch((err) => console.log(err));
  };
};

export const getHouse = (houseName) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/api/houses/${houseName}`)
      .then((info) => dispatch(showHouse(info.data)))
      .catch((err) => console.log(err));
  };
};