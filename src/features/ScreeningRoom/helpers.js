const checkCordsY = (s, i, element) => {
    let result = 0;

    if (typeof element[i + 1] === `undefined`) {
        result = s.cords.y - element[i - 1].cords.y
    } else {
        result = element[i + 1].cords.y - s.cords.y
    }

    return result;
}

export const checkReservation = (seats, id, qtySBU, x) => {
    seats = [
        ...seats.filter(s => s.reserved === false && s.cords.x === x)
    ];

    const seatsy = [];

    for (let i = 0; seatsy.length < 15; i++) {
        seatsy.push(i);
    }

    seats = [
        ...seats.map((s, index) => seats.slice(index, index + qtySBU)).filter(e => e.length === qtySBU),
    ]

    seats = seats.find(element => (element.some(s => s.id === id) && element.every((s, i, element) => checkCordsY(s, i, element) === 1)) === true)

    return (typeof seats === `undefined` ? [] : seats);
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