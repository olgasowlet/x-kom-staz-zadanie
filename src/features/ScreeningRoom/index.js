import { useDispatch, useSelector } from 'react-redux';
import { addSeat, getSideBySideSeats, removeAllSeats, removeSeat, selectQtySBU, selectSeats, selectSeatsSBU, selectSideBySide } from "../../app/seatsSlice";
import { Screen, Seat } from "./styled";
import Main from "../../common/Main";

const ScreeningRoom = () => {
    const { seats } = useSelector(selectSeats);
    const qtySBU = useSelector(selectQtySBU);
    const seatsSBU = useSelector(selectSeatsSBU);
    const sideBySide = useSelector(selectSideBySide);
    const dispatch = useDispatch();

    const reactOnReservedSeats = () => {
        alert("Nie da się wybrać miejsc obok siebie, proszę wybrać inne miejsca");
        dispatch(removeAllSeats());
    }

    const onSeatChange = (event, id, x, y) => {
        if (!event.target.checked) {
            dispatch(removeSeat(id));
        } else {
            if (seatsSBU.length < qtySBU) {
                if (seatsSBU.every(seat => seat.reserved === false)) {
                    reactOnReservedSeats();
                    event.target.checked = false;
                } else if (sideBySide) {
                    console.log(x, y);
                    dispatch(getSideBySideSeats({
                        id,
                        cords: {
                            x,
                            y
                        },
                        qtySBU
                    }));
                } else {
                    dispatch(addSeat({
                        id,
                        cords: {
                            x,
                            y
                        },
                    }))
                }
            } else {
                event.target.checked = false;
                alert(`Nie możesz wybrać więcej niż ${qtySBU} miejsc`)
            }
        };
    };

    return (
        <Main screen>
            <Screen>
                {seats ? seats.map(seat =>
                    <Seat
                        key={seat.id}
                        column={seat.cords.y}
                        row={seat.cords.x}
                        disabled={seat.reserved}
                        type="checkbox"
                        onInput={(event) => onSeatChange(event, seat.id, seat.cords.x, seat.cords.y)}
                    />) : "Trwa ładowanie danych"}
            </Screen>
        </Main>
    );
};

export default ScreeningRoom;