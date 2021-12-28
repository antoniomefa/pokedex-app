import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        pokemonsList: [],
        pagCounter: 0,
    },
    reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
        setPokemonsList: (state, action) => {
            state.pokemonsList = [...state.pokemonsList, ...action.payload];
        },
        setPagCounter: (state, action) => {
            state.pagCounter += 20;
        },
    },
});

export const { setPokemonsList, setPagCounter } = homeSlice.actions;

export default homeSlice.reducer;