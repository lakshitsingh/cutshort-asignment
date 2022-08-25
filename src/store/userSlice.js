import { createSlice } from "@reduxjs/toolkit";


// creating action & reducers
const userSlice = createSlice({
    name: "user",
    initialState: {
        data: []
    },

    reducers: {
        setUser(state, action) {
            state.data = action.payload;
        }
    }
})


// export action & reducers
export const { setUser } = userSlice.actions;
export default userSlice.reducer;

//Thunk

export function fetchUsers() {
    return async function fetchUsersThunk(dispatch, getState) {
        try {
            const res = await fetch('http://localhost:3004/user');
            const data = await res.json()
            dispatch(setUser(data));
        }
        catch (err) {
            console.log(err);
        }
    }
}