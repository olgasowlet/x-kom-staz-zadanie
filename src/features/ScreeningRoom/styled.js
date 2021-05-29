import styled from "styled-components";

const handlePosition = (position) => {
    return position + 1;
}

export const Screen = styled.div`
    display: grid;
    width: 1040px;
    grid-template-columns: repeat(auto-fill, min(60px));
    row-gap: 10px;
    column-gap: 10px;
    margin-top: 30px;
`;

export const Seat = styled.div`
    width: 60px;
    height: 60px;
    border: 1px solid black;
    grid-row: ${({ row }) => handlePosition(row)};
    grid-column: ${({ column }) => handlePosition(column)};
`;