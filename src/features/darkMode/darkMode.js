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
export default moodSlice.reducer;
export const { toggleDarkMode } = moodSlice.actions;