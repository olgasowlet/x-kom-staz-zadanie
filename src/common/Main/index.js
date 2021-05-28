import { StyledMain } from "./styled";

const Main = (props) => {
    return (
        <StyledMain {...props}>
            {props.children}
        </StyledMain>
    )
};

export default Main;