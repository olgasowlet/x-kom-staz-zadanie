import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watchfetchSeats } from './seatsSaga';
import seatsReducer from "./seatsSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        seats: seatsReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchfetchSeats);
