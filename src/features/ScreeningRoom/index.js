import { useEffect } from "react";
import { fetchData } from "../../api";
import { Screen, Seat } from "./styled";

const ScreeningRoom = () => {
    
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Screen>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
            <Seat></Seat>
        </Screen>
    );
};

export default ScreeningRoom;