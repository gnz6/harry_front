import { createSlice } from "@reduxjs/toolkit";

export const houseSlice = createSlice({
  name: "houses",
  initialState: {
    allHouses: ["Slytherin","Gryffindor","Hufflepuff","Ravenclaw" ],
    house: [],
  },
  reducers: {
    allHouses: (state, { payload }) => {
      state.allHouses = payload;
    },
    showHouse: (state, { payload }) => {
      state.house = payload;
    }
  },
});

export const { allHouses, showHouse }=houseSlice.actions;

export default houseSlice.reducer;
