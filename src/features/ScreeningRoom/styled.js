import styled from "styled-components";

const handlePosition = (position) => {
    return position + 1;
}

export const Screen = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, 70px);
    row-gap: 10px;
    column-gap: 10px;
`;

export const Seat = styled.div`
    width: 70px;
    height: 70px;
    border: 1px solid black;
    grid-row: ${({ row }) => handlePosition(row)};
    grid-column: ${({ column }) => handlePosition(column)};
`;