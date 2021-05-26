import { StyledMain } from "./styled";

const Main = (props) => {
    return (
        <StyledMain>
            {props.children}
        </StyledMain>
    )
};

export default Main;