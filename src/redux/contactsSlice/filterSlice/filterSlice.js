import { createSlice } from "@reduxjs/toolkit";




export const filterSlice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        addingFilterValue(state, action) {
            // return is required
            console.log(typeof state)
            return action.payload;
        },
    },
});

export const { addingFilterValue } = filterSlice.actions;