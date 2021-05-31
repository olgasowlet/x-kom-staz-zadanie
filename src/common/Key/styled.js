import styled, { css } from "styled-components";

export const StyledKeySeat = styled.div`
    margin-right: 15px;
    height: 70px;
    border: 1px solid black;

    ${({ reserved }) => reserved && css`
        background-color: gray;
    `};

    ${({ checked }) => checked && css`
        background-color: orange;
    `};
`;