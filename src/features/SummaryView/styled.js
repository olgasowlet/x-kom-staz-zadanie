import styled from "styled-components";

export const Title = styled.h1`
    font-size: 1.2em;
`;

export const Ul = styled.ul`
    margin-top: 0;
    padding-left: 0;
`;

export const ListItem = styled.li`
    list-style: none;

    &::before {
        content: "- "
    }
`;