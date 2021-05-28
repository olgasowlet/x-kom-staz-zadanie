import { call, put, takeEvery } from "redux-saga/effects";
import { fetchData } from "../api/index";
import { getSeats, setSeats } from "./seatsSlice";

function* fetchSeatsHandler() {
    try {
        const seats = yield call(fetchData);
        yield put(setSeats(seats));
    } catch (error) {
        yield call(alert, "Nie udało się przekazać danych z API do stanu aplikacji", error);
    };
};

export function* watchfetchSeats() {
    yield takeEvery(getSeats.type, fetchSeatsHandler);
}
