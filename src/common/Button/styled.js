import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    cursor: pointer;
    background-color: white;
    border: 1px solid black;
    transition: background-color 1s;
    height: 100%;

    &:hover {
        background-color: rgb(226, 95, 18, .5);
    }

    ${({ confirm }) => confirm && css`
        grid-area: button;
    `};
`;