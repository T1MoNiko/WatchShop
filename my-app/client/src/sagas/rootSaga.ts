import { all } from "redux-saga/effects";
import productsSaga from "./productsSaga";


export function* rootSaga() {
    yield all([
        productsSaga()
    ])
}