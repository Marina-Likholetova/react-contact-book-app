import { call, put, takeLatest } from "redux-saga/effects";
import {
    SET_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CONTACTS_SAGA,
    ADD_CONTACT_SAGA,
    DELETE_CONTACT_SAGA,
    setContactActionText,
    setContactError,
    setContactLoading,
} from "../../actions/contacts";
import api from "../../../api/contacts";



function* onFetchContactsSaga() {
    yield put(setContactActionText(null));
    yield put(setContactError(null));
    yield put(setContactLoading(true));

    try {
        const payload = yield call(api.getContacts);
        yield put({ type: SET_CONTACTS, payload });
    } catch (error) {
        yield put(setContactError(error.message));
    }

    yield put(setContactLoading(false));
}


function* onAddContactSaga({ payload }) {
    yield put(setContactError(null));
    yield put(setContactLoading(true));

    try {
        let response = yield call(api.addNewContact, payload);
        yield put({ type: ADD_CONTACT, payload: response });
    } catch (error) {
        yield put(setContactError(error.message));
    }

    yield put(setContactLoading(false));
    yield put(setContactActionText("save"));
}


function* onDeleteContactSaga({ payload }) {
    yield put(setContactError(null));
    yield put(setContactLoading(true));

    try {
        yield call(api.deleteContact, payload);
        yield put({ type: DELETE_CONTACT, payload });
    } catch (error) {
        yield put(setContactError(error.message));
    }

    yield put(setContactLoading(false));
    yield put(setContactActionText("delete"));
}


const contactWatchers = [
    takeLatest(SET_CONTACTS_SAGA, onFetchContactsSaga),
    takeLatest(ADD_CONTACT_SAGA, onAddContactSaga),
    takeLatest(DELETE_CONTACT_SAGA, onDeleteContactSaga),
];

export default contactWatchers;
