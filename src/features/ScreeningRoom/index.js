import { useSelector } from 'react-redux';
import { selectSeats } from "../../app/seatsSlice";
import { Screen, Seat } from "./styled";
import Main from "../../common/Main";

const ScreeningRoom = () => {
    const { seats } = useSelector(selectSeats);
    console.log(seats);

    //Mogę zrobić tak, że dodam atrybut x do każdego Seat i w styled komponent jeśli taki atrybut będzie miał wartość np. 0 to będzie w pierwszym wierszu itd.

    return (
        <Main screen>
            <Screen>
                {seats.map(seat => <Seat key={seat.id} column={seat.cords.y} row={seat.cords.x}></Seat>)}
            </Screen>
        </Main>
    );
};

export default ScreeningRoom;