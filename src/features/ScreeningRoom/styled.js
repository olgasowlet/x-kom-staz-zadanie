import styled from "styled-components";

export const Screen = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, 100px);
`;

export const Seat = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid black;
`;