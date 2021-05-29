import { useDispatch, useSelector } from 'react-redux';
import { addSeat, removeSeat, selectSeats } from "../../app/seatsSlice";
import { Screen, Seat } from "./styled";
import Main from "../../common/Main";

const ScreeningRoom = () => {
    const { seats } = useSelector(selectSeats);
    const dispatch = useDispatch();

    const onSeatChange = (event, id, x, y) => {
        if (!event.target.checked) {
            dispatch(removeSeat(id));
        } else {
            dispatch(addSeat({
                id,
                cords: {
                    x,
                    y
                },
            }))
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