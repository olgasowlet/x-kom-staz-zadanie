import { useDispatch, useSelector } from 'react-redux';
import { addSeat, setSideBySideSeats, removeAllSeats, removeSeat, selectQtySBU, selectSeats, selectSeatsSBU, selectSideBySide } from "../../app/seatsSlice";
import { Screen, Seat } from "./styled";
import Main from "../../common/Main";
import Key from '../../common/Key';
import Button from '../../common/Button';
import Container from '../../common/Container';

const ScreeningRoom = () => {
    const { seats } = useSelector(selectSeats);
    const qtySBU = useSelector(selectQtySBU);
    const seatsSBU = useSelector(selectSeatsSBU);
    const sideBySide = useSelector(selectSideBySide);
    const dispatch = useDispatch();

    const onChange = (event, id, x, y) => {
        if (event.target.checked) { //zmienić na zalezne od stanu wybranych siedzeń przez usera -> to co jest w stanie jest jednoczesnie checked
            onChecked(event, id, x, y);
        } else {
            onUnchecked(id)
        }
    };

    const onChecked = (event, id, x, y) => {
        if (seatsSBU.length < qtySBU) {
            if (sideBySide) {
                dispatch(setSideBySideSeats({
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
        };
    };

    const onUnchecked = (id) => {
        sideBySide ? dispatch(removeAllSeats()) : dispatch(removeSeat(id));
    }

    return (
        <>
            <Main screen>
                <Screen>
                    {seats ? seats.map(seat =>
                        <Seat
                            key={seat.id}
                            column={seat.cords.y}
                            row={seat.cords.x}
                            disabled={seat.reserved}
                            type="checkbox"
                            checked={seatsSBU.find(s => s.id === seat.id) ? true : false}
                            onChange={(event) => onChange(event, seat.id, seat.cords.x, seat.cords.y)}
                        />) : "Trwa ładowanie danych"}
                </Screen>
            </Main>
            <Container>
                <Key></Key>
                <Button content="Rezerwuj" confirm={false}></Button>
            </Container>
        </>
    );
};

export default ScreeningRoom;