import { createSlice } from "@reduxjs/toolkit";

export const spellsSlice = createSlice({
  name: "spell",
  initialState: {
    allSpells: [],
    spell: [],
  },
  reducers: {
    allSpells: (state, { payload }) => {
      state.allSpells = payload;
    },
    showSpell: (state, { payload }) => {
      state.spell = payload;
    }
  },
});

export const { allSpells, showSpell } =
  spellsSlice.actions;

export default spellsSlice.reducer;
