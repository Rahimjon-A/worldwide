import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    switcher: false,
}

export const ThemeMode = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme : state => {
            state.switcher = !state.switcher;
        }
    }

})

export const { toggleTheme } = ThemeMode.actions;
export default ThemeMode.reducer