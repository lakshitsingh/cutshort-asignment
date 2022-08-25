import { createSlice } from "@reduxjs/toolkit";

// Creating User access status
export const AUTHSTATUSES = Object.freeze({
    LOGIN: "Sign In",
    LOGOUT: 'Sign Out',
    LOGINLINK: '/login',
    LOGOUTLINK: '/logout'
})

// creating action & reducers

const authSlice = createSlice({
    name: "auth",
    initialState: {
        auth: AUTHSTATUSES.LOGIN,
        link: AUTHSTATUSES.LOGINLINK
    },

    reducers: {
        setAuth(state, action) {
            state.auth = action.payload
        },
        setLink(state, action) {
            state.link = action.payload
        }
    }
})


// export action & reducers
export const { setAuth, setLink } = authSlice.actions;
export default authSlice.reducer