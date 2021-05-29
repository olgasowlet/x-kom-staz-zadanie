import { useSelector } from 'react-redux';
import { selectSeats } from "../../app/seatsSlice";
import { Screen, Seat } from "./styled";
import Main from "../../common/Main";

const ScreeningRoom = () => {
    const { seats } = useSelector(selectSeats);

    return (
        <Main screen>
            <Screen>
                {seats ? seats.map(seat => <Seat key={seat.id} column={seat.cords.y} row={seat.cords.x} disabled={seat.reserved} type="checkbox" />) : "Trwa ładowanie danych"}
            </Screen>
        </Main>
    );
};

export default ScreeningRoom;