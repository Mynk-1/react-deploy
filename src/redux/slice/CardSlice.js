// slice/CardSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loggedIn: true,
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
        logoutHandler:(state)=>{
            state.loggedIn = !state.loggedIn;
        }
    },
});

export const { bgmiToggle, ludoToggle, otherToggle ,logoutHandler} = cardSlice.actions;
export default cardSlice.reducer;
