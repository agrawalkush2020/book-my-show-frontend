// store/movieSlice.js
import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        locations: [],
    },
    reducers: {
        setLocations: (state, action) => {
            state.locations = action.payload;
        },
        clearLocations: (state) => {
            state.locations = [];
        },
    },
});

export const { setLocations, clearLocations } = movieSlice.actions;

export default movieSlice.reducer;
