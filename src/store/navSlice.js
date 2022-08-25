import { createSlice } from "@reduxjs/toolkit";
import record from './record.json'

const menuItemsLinks = record.menuItemsLinks
const navSlice = createSlice({
    name: "nav",
    initialState: {
        nav: menuItemsLinks
    },

    reducers: {
        setNav(state, action) {
            state.action = action.payload;
        }
    }
})

export const { setUser } = navSlice.actions;
export default navSlice.reducer;