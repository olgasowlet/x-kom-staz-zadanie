import { createSlice } from "@reduxjs/toolkit";

const seatsSlice = createSlice({
    name: 'seats',
    initialState: {
        seats: []
    },
});

export const selectSeats = state => state.seats;
export default seatsSlice.reducer;