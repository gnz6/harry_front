import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {},
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state, action) => {
            state.user = null
        },
        register: (state, action) => {
            state.user = action.payload
        },
        googleLog: (state, action) => {
            state.user = action.payload
        },
        getUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { login, logout, register, googleLog, getUser } = authSlice.actions;

export default authSlice.reducer