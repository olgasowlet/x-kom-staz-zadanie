import styled from "styled-components";
import checkImage from "../../images/check32.png";

export const StyledRegistrationForm = styled.form`
    max-width: 500px;
    padding: 10px;
    display: grid;
    grid-template-areas: 
    "label label input input"
    "checkbox checkboxLabel checkboxLabel checkboxLabel"
    "button button button button";
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 50px) 70px;
    row-gap: 30px;
    column-gap: 10px;
`;

export const Label = styled.label`
    grid-area: label;
    align-self: center;
`;

export const CheckboxLabel = styled(Label)`
    grid-area: checkboxLabel;
`;

export const Input = styled.input`
    grid-area: input;
    border: 1px solid black;
`;

export const Checkbox = styled.input`
    grid-area: checkbox;
    align-self: center;
    justify-self: center;
    appearance: none;
    border: 1px solid black;
    border-radius: 3px;
    padding: 15px;
    display: inline-block;
    position: relative;
    cursor: pointer;

    &:checked {
        background-image: url(${checkImage});
        background-position: center;
    }
`;

export const Button = styled.button`
    grid-area: button;
    cursor: pointer;
    background-color: white;
    border: 1px solid black;
    transition: background-color 1s;

    &:hover {
        background-color: rgb(226, 95, 18, .5);
    }
`;