import axios from 'axios';
import { getSeatsUnreserved } from './helpers';

export const getProposedSeats = async (quantity) => {
    try {
        const response = await axios.get("http://localhost:3000/seats");
        const proposedSeats = getSeatsUnreserved(response.data, quantity)
        return proposedSeats;
    } catch (error) {
        console.error("Nie udało się pobrać danych dotyczących miejsc w kinie", error);
    }
};