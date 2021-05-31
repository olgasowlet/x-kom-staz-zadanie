import { StyledButton} from "./styled"

const Button = ({content, confirm}) => {
    return (
        <StyledButton confirm={confirm}>{content}</StyledButton>
    )
};

export default Button;