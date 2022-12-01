import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth/authSlice"
import charsSlice  from "./slices/characters/characterSlice";
import spellsSlice from "./slices/spells/spellsSlice";
import houseSlice from "./slices/houses/houseSlice"

export const store = configureStore({
    reducer:{
        auth: authSlice,
        characters: charsSlice,
        spells: spellsSlice,
        houses: houseSlice
    }
})