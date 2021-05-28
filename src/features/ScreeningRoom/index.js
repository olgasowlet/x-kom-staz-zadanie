import { useSelector } from 'react-redux';
import { selectSeats } from "../../app/seatsSlice";
import { Screen, Seat } from "./styled";

const ScreeningRoom = () => {
    const { seats } = useSelector(selectSeats);
    console.log(seats);

    return (
        <Screen>
            {seats.map(seat => <Seat key={seat.id}>{seat.id}</Seat>)}
        </Screen>
    );
};

export default ScreeningRoom;