import { createSlice } from "@reduxjs/toolkit";
import record from './record.json';

const otherProfileCard = record.otherProfileCard;
const photos = record.otherProfileCardPopoverPhotos

const otherProfileSlice = createSlice({
    name: "otherProfile",
    photos: "photos",
    initialState: {
        otherProfile: otherProfileCard,
        photos: photos
    },

    reducers: {
        setotherProfile(state, action) {
            state.action = action.payload
        },
        setPhotos(state, action) {
            state.action = action.payload
        }
    }
})

export const { otherProfile } = otherProfileSlice.actions

export default otherProfileSlice.reducer