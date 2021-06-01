import { useSelector } from "react-redux";
import { selectSeatsSBU } from "../../app/seatsSlice";
import Main from "../../common/Main";
import { ListItem, Title, Ul } from "./styled";

const SummaryView = () => {
    const seatsSBU = useSelector(selectSeatsSBU);

    return (
        <Main>
            <Title>Twoja rezerwacja przebiegła pomyślnie!</Title>
            <p>Wybrałeś/aś miejsca:</p>
            <Ul>
                {seatsSBU.length ? seatsSBU.map(seat => <ListItem>rząd {seat.cords.x}, miejsce {seat.cords.y} ({seat.id})</ListItem>) : "Nie wybrano żadnych miejsc"}
            </Ul>
            <p><b>Dziękujemy! W razie problemów prosimy o kontakt do administracji.</b></p>
        </Main>
    )
};

export default SummaryView;