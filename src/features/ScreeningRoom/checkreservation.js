export const checkReservation = (seats) => {
    if (seats.length) {
        return seats.some(seat => seat.reserved) ? [] : seats ;
    }
}