import axios from 'axios';

export const fetchData = async () => {
    try {
        const response = await axios.get("http://localhost:3000/seats");
        console.log(response.data);
    } catch (error) {
        console.error("Nie udało się pobrać danych o miejscach", error);
    }
};