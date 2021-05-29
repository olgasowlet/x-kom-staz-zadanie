import { useDispatch, useSelector } from 'react-redux';
import { addSeat, removeSeat, selectQtySBU, selectSeats, selectSeatsSBU } from "../../app/seatsSlice";
import { Screen, Seat } from "./styled";
import Main from "../../common/Main";

const ScreeningRoom = () => {
    const { seats } = useSelector(selectSeats);
    const qtySBU = useSelector(selectQtySBU);
    const seatsSBU = useSelector(selectSeatsSBU)
    const dispatch = useDispatch();

    const onSeatChange = (event, id, x, y) => {
        if (!event.target.checked) {
            dispatch(removeSeat(id));
        } else {
            if (seatsSBU.length < qtySBU) {
                dispatch(addSeat({
                    id,
                    cords: {
                        x,
                        y
                    },
                }))
            } else {
                event.target.checked = false;
                alert(`Nie możesz wybrać więcej niż ${qtySBU} miejsc`)
            }
        };
    }

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