import { useEffect, useState } from "react";
import { Redirect, useHistory } from 'react-router-dom';
import Main from "../../common/Main";
import { StyledRegistrationForm, Label, CheckboxLabel, Input, Checkbox, Button } from "./styled";

const RegistrationForm = () => {
    const [redirect, setRedirect] = useState(false);
    const history = useHistory();

    //Narazie po odświeżeniu wraca do widoku formularza, ale lepszym rozwiązaniem raczej będzie dodanie przycisku 'cofnij' z sali kinowej
    useEffect(() => {
        history.replace("/");
    }, []);

    if (!redirect) {
        return (
            <Main>
                <StyledRegistrationForm>
                    <Label htmlFor="numberOfSeats">Liczba miejsc:</Label>
                    <Input type="number" id="numberOfSeats" />
                    <Checkbox type="checkbox" id="sideBySide" />
                    <CheckboxLabel htmlFor="sideBySide">Czy miejsca mają być obok siebie?</CheckboxLabel>
                    <Button onClick={() => setRedirect(true)}>Wybierz miejsca</Button>
                </StyledRegistrationForm>
            </Main>
        );
    };

    return (
        <Redirect to="/screening-room" />
    );
}

export default RegistrationForm;