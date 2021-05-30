import { call, put, select, takeEvery } from "redux-saga/effects";
import { fetchData } from "../api/index";
import { checkReservation } from "../features/ScreeningRoom/checkreservation";
import { getSeats, removeAllSeats, selectSeatsSBU, setSeats, setSeatsSBU, setSideBySideSeats } from "./seatsSlice";

function* fetchSeatsHandler() {
    try {
        const seats = yield call(fetchData);
        yield put(setSeats(seats));
    } catch (error) {
        yield call(alert, "Nie udało się przekazać danych z API do stanu aplikacji", error);
    };
};

function* checkSeatsReservation() {
    try {
        const seatsSBU = yield select(selectSeatsSBU);
        const response = yield call(checkReservation, seatsSBU);
        yield put(setSeatsSBU(response));
    } catch {
        yield call(alert, "Popsute :/");
    }
};

export function* watchfetchSeats() {
    yield takeEvery(getSeats.type, fetchSeatsHandler);
    yield takeEvery(setSideBySideSeats.type, checkSeatsReservation);
}
