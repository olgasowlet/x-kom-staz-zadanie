import { createSlice } from "@reduxjs/toolkit";

const seatsSlice = createSlice({
    name: 'seats',
    initialState: {
        seats: []
    },
    reducers: {
        getSeats: () => {},
        setSeats: ({ seats }, payload) => {
            seats.push(payload);
        },
    }
});

export const { getSeats, setSeats } = seatsSlice.actions;
export const selectSeats = state => state.seats;
export default seatsSlice.reducer;