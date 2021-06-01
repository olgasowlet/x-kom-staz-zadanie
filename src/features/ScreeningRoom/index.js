import { useDispatch, useSelector } from 'react-redux';
import { addSeat, removeAllSeats, removeSeat, selectQtySBU, selectSeats, selectSeatsSBU, selectSideBySide, setSeatsSBU } from "../../app/seatsSlice";
import { Screen, Seat } from "./styled";
import Main from "../../common/Main";
import Key from '../../common/Key';
import Container from '../../common/Container';
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { StyledButton } from '../../common/Button/styled';
import { checkReservation } from "./helpers";

const ScreeningRoom = () => {
    const [redirect, setRedirect] = useState(false);
    const history = useHistory();
    const seats = useSelector(selectSeats);
    const qtySBU = useSelector(selectQtySBU);
    const seatsSBU = useSelector(selectSeatsSBU);
    const sideBySide = useSelector(selectSideBySide);
    const dispatch = useDispatch();

    const onChange = (event, id, x, y) => {
        if (event.target.checked) { 
            onChecked(event, id, x, y);
        } else {
            onUnchecked(id)
        }
    };

    const onChecked = (event, id, x, y) => {
        if (seatsSBU.length < qtySBU) {
            if (sideBySide) {
                const proposedSeats = checkReservation(seats, id, qtySBU, x);
                dispatch(setSeatsSBU(proposedSeats));
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

    const handleClick = () => {
        if (history.location.pathname === "/screening-room") {
            setRedirect(true);
        }
    }

    if (!redirect) {
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
                    <StyledButton onClick={handleClick} confirm={false} >Rezerwuj</StyledButton>
                </Container>
            </>
        );
    }

    return (
        <Redirect to="/confirmation" />
    )
};

export default ScreeningRoom;