import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from 'react-router-dom';
import { getSeats, selectQtySBU, selectSideBySide, setQtySBU, toggleSideBySide } from "../../app/seatsSlice";
import Main from "../../common/Main";
import { StyledRegistrationForm, Label, CheckboxLabel, Input, Checkbox, Button } from "./styled";

const RegistrationForm = () => {
    const [redirect, setRedirect] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const qtySBU = useSelector(selectQtySBU);
    const sideBySide = useSelector(selectSideBySide);

    const onNumberChange = (event) => {
        dispatch(setQtySBU(parseInt(event.target.value)));
    }

    const onCheckboxChange = () => {
        dispatch(toggleSideBySide());
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(`Liczba wybranych miejsc wynosi ${qtySBU} a miejsca są obok siebie: ${sideBySide}`);

        setRedirect(true);
        dispatch(getSeats());
    }

    //Narazie po odświeżeniu wraca do widoku formularza, ale lepszym rozwiązaniem raczej będzie dodanie przycisku 'cofnij' z sali kinowej
    useEffect(() => {
        history.replace("/");
    }, []);

    if (!redirect) {
        return (
            <Main>
                <StyledRegistrationForm onSubmit={onFormSubmit}>
                    <Label htmlFor="numberOfSeats">Liczba miejsc:</Label>
                    <Input type="number" id="numberOfSeats" value={qtySBU} onChange={onNumberChange}/>
                    <Checkbox type="checkbox" id="sideBySide" value={sideBySide} onChange={onCheckboxChange}/>
                    <CheckboxLabel htmlFor="sideBySide">Czy miejsca mają być obok siebie?</CheckboxLabel>
                    <Button>Wybierz miejsca</Button>
                </StyledRegistrationForm>
            </Main>
        );
    };

    return (
        <Redirect to="/screening-room" />
    );
}

export default RegistrationForm;
