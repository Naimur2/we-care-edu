import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDarkMode: false,
}
const moodSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        }
    },
});

const filterSliceReducer = moodSlice.reducer;
export default filterSliceReducer;
export const { toggleDarkMode } = moodSlice.actions;