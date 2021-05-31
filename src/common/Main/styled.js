import styled, { css } from "styled-components";

export const StyledMain = styled.main`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    ${({ screen }) => screen && css`
        height: unset;
        width: 100vw;
    `};
`;