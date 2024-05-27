import { createSlice } from "@reduxjs/toolkit";

export const CountrySlice = createSlice({
    name: "country",
    initialState: {country : 0},
    reducers: {
        plusCounter: (state, payload) => {
            state.country += 1
        },
        minusCounter: (state, payload) => {
            state.country -= 1
        },
        resetCounter: (state, payload) => {
            state.country = 0
        }
    }
})

export const { plusCounter, minusCounter, resetCounter } = CountrySlice.actions;
export default CountrySlice.reducer