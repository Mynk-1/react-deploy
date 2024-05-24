// slice/CardSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedFilter: "Bgmi",
    CardData: {},
};

const cardSlice = createSlice({
    name: "Card",
    initialState,
    reducers: {
        bgmiToggle: (state) => {
            state.selectedFilter = "Bgmi";
        },
        ludoToggle: (state) => {
            state.selectedFilter = "Ludo";
        },
        otherToggle: (state) => {
            state.selectedFilter = "Other";
        },
    },
});

export const { bgmiToggle, ludoToggle, otherToggle } = cardSlice.actions;
export default cardSlice.reducer;
