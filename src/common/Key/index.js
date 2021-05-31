import { StyledKeySeat } from "./styled"

const Key = () => {
    return (
        <>
            <StyledKeySeat></StyledKeySeat>
            <p>Miejsca dostępne</p>
            <StyledKeySeat reserved></StyledKeySeat>
            <p>Miejsca zarezerwowane</p>
            <StyledKeySeat checked></StyledKeySeat>
            <p>Twój wybór</p>
        </>
    )
};

export default Key;