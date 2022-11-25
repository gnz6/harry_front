import { allChars, showCharacter } from "./characterSlice";
import axios from "axios";

export const getAllCharacters = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/api/characters")
      .then((info) => dispatch(allChars(info.data)))
      .catch((err) => console.log(err));
  };
};

export const getCharacter = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/api/characters/${id}`)
      .then((info) => dispatch(showCharacter(info.data)))
      .catch((err) => console.log(err));
  };
};