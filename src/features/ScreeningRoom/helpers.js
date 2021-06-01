export const checkReservation = (seats, id, qtySBU, x) => {
    if (!seats.length) {
        return
    }

    seats = [
        ...seats.filter(s => s.reserved === false && s.cords.x === x)
    ];

    const index = seats.findIndex(s => s.id === id);

    seats = [
        ...seats.slice(index - Math.floor(qtySBU / 2), index + Math.ceil(qtySBU / 2))
    ];

    let propose = []

    seats.forEach((s, index) => {
        if (seats[index - 1] === undefined) {
            if (Math.abs(seats[index + 1].cords.y - s.cords.y === 1)) {
                propose.push(s);
            }
        } else {
            if (Math.abs(s.cords.y - seats[index - 1].cords.y === 1)) {
                propose.push(s);
            }
        }
    });

    if (propose.length < qtySBU) {
        if ((seats[index - 1] === undefined) || (seats[index + 1] === undefined)) {
            propose = [];
        } else {
            propose.push(seats[index - 1]) || propose.push(seats[index + 1]);
        }
    }

    return propose;
}

export const getSeatsUnreserved = (seats, q) => {
    let unreservedSeats = [];

    while (unreservedSeats.length < q) {
        let element = seats.find(s => s.reserved === false);
        let index = seats.indexOf(element);

        unreservedSeats.push(element);
        seats.splice(index, 1)
    }

    return unreservedSeats;
}