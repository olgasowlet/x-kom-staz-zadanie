import React from 'react';
import Main from "./common/Main";
import { RegistrationForm, Label, CheckboxLabel, Input, Checkbox, Button } from "./styled";

function App() {
  return (
    <Main>
      <RegistrationForm>
        <Label>Liczba miejsc:</Label>
        <Input type="number" />
        <Checkbox type="checkbox" />
        <CheckboxLabel>Czy miejsca mają być obok siebie?</CheckboxLabel>
        <Button>Wybierz miejsca</Button>
      </RegistrationForm>
    </Main>
  );
}

export default App;
