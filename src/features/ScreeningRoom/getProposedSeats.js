import axios from 'axios';

export const getProposedSeats = async (quantity) => {
    try {
        const response = await axios.get("http://localhost:3000/seats");
        return response.data.slice(0, quantity);
    } catch (error) {
        console.error("Nie udało się pobrać danych dotyczących miejsc w kinie", error);
    }
};