import { all } from "redux-saga/effects";
import contactWatchers from './contacts/index'

export default function* rootSagas() {
    yield all([...contactWatchers]);
}