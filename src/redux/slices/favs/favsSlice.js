import { createSlice } from "@reduxjs/toolkit"

export const favSlice = createSlice({
    name: "fav",
    initialState: {
        favs: {},
    },
    reducers: {
        responseFav: (state, action) => {
            state.favs = action.payload
        }
    }
})

export const { responseFav } = favSlice.actions;

export default favSlice.reducer