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
        setQtySBU: (state, { payload }) => {
            state.qtySBU = payload;
        },
        toggleSideBySide: (state) => {
            state.sideBySide = !state.sideBySide;
        },
        addSeat: (state, { payload }) => {
            state.seatsSBU.push(payload);
        },
        removeSeat: (state, { payload }) => {
            const index = state.seatsSBU.findIndex(seat => seat.id === payload);
            state.seatsSBU.splice(index, 1);
        },
        removeAllSeats: (state) => {
            state.seatsSBU = [];
        },
        setSeatsSBU: (state, { payload }) => {
            state.seatsSBU = payload;
        }
    }
});

export const { getSeats, setSeats, setQtySBU, toggleSideBySide, addSeat, removeSeat, removeAllSeats, setSeatsSBU } = seatsSlice.actions;
export const selectSeats = state => state.seats.seats;
export const selectQtySBU = state => state.seats.qtySBU;
export const selectSideBySide = state => state.seats.sideBySide;
export const selectSeatsSBU = state => state.seats.seatsSBU;
export default seatsSlice.reducer;