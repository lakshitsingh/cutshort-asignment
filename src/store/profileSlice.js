import { createSlice } from "@reduxjs/toolkit";
import record from './record.json';

const profileCard = record.profileCard;

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        profile: profileCard
    },

    reducers: {
        setProfile(state, action) {
            state.action = action.payload;
        }
    }
})

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer