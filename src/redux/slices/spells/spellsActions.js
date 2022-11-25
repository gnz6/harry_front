import { allSpells, showSpell } from "./spellsSlice";
import axios from "axios";

export const getAllSpells = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/api/spells")
      .then((info) => dispatch(allSpells(info.data)))
      .catch((err) => console.log(err));
  };
};

export const getSpell = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/api/spells/${id}`)
      .then((info) => dispatch(showSpell(info.data)))
      .catch((err) => console.log(err));
  };
};