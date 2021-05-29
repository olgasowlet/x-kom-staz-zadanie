import { createSlice } from "@reduxjs/toolkit";

const seatsSlice = createSlice({
    name: 'seats',
    initialState: {
        seats: [],
        qtySBU: 0, //quanity of seats selected by user
        sideBySide: false,
        seatsSBU: [] //seats selected by user
    },
    reducers: {
        getSeats: () => { },
        setSeats: (state, { payload }) => {
            state.seats = payload;
        },
        setQtySBU: ( state, { payload }) => {
            state.qtySBU = payload;
        }
    }
});

export const { getSeats, setSeats, setQtySBU } = seatsSlice.actions;
export const selectSeats = state => state.seats;
export const selectQtySBU = state => state.seats.qtySBU;
export const selectSideBySide = state => state.seats.sideBySide;
export const selectSeatsSBU = state => state.seats.seatsSBU;
export default seatsSlice.reducer;