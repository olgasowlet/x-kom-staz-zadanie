import axios from 'axios';

export const fetchData = async () => {
    try {
        const response = await axios.get("http://localhost:3000/seats");
        return response.data;
    } catch (error) {
        console.error("Nie udało się pobrać danych dotyczących miejsc w kinie", error);
    }
};