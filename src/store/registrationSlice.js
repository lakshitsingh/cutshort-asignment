import { createSlice } from "@reduxjs/toolkit";

// creating action & reducers

const registrationSlice = createSlice({
    name: 'registration',
    initialState: {
        data: []
    },

    reducers: {
        setRegistration(state, action) {
            state.data = action.payload
            console.log("shivji", state.data)
        }
    }
})


// export action & reducers
export const { setRegistration } = registrationSlice.actions
export default registrationSlice.reducer;

//thunk
export function fetchRegistration() {
    return async function fetchRegistrationThunk(dispatch, getState) {
        try {
            console.log(getState().registration.data)
            const res = await fetch("http://localhost:3004/user", {
                method: 'POST',
                body: JSON.stringify(
                    getState().registration.data[0]
                ),
                headers: {
                    "COntent-Type": 'application/json; charset=UTF-8',
                },
            })
            const data = await res.json();
        } catch (err) {
            console.log(err);
        }
    }
}