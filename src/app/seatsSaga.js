import { call, put, select, takeEvery } from "redux-saga/effects";
import { fetchData } from "../api/index";
import { getProposedSeats } from "../features/ScreeningRoom/getProposedSeats";
import { getSeats, selectQtySBU, selectSeatsSBU, setSeats, setSeatsSBU } from "./seatsSlice";

function* fetchSeatsHandler() {
    try {
        const seats = yield call(fetchData);
        yield put(setSeats(seats));
    } catch (error) {
        yield call(alert, "Nie udało się przekazać danych z API do stanu aplikacji", error);
    };
};

function* getProposedSeatsHandler() {
    try {
        const quanity = yield select(selectQtySBU);
        const proposalSeats = yield call(getProposedSeats, quanity);
        yield put(setSeatsSBU(proposalSeats));
    } catch (error) {
        yield call(alert, "Nie udało się przekazać danych z API do stanu aplikacji", error);
    }
}

function* checkSeatsReservationHandler() {
    try {
        const seatsSBU = yield select(selectSeatsSBU);

        if (!seatsSBU.length) {
            alert("Proszę wybrać inne miejsca");
        }

    } catch (error) {
        yield call(console.log, error);
    }
};

export function* watchfetchSeats() {
    yield takeEvery(getSeats.type, fetchSeatsHandler);
    yield takeEvery(getSeats.type, getProposedSeatsHandler);
    yield takeEvery(setSeatsSBU.type, checkSeatsReservationHandler);
}
