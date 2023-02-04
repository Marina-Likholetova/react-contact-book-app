export const SET_CONTACTS = "SET_CONTACTS";
export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";

export const SET_CONTACT_ACTION_TEXT = "SET_CONTACT_ACTION_TEXT";
export const SET_CONTACT_LOADING = "SET_TODO_LOADING";
export const SET_CONTACT_ERROR = "SET_CONTACT_ERROR";

export const SET_CONTACTS_SAGA = "SET_CONTACTS_SAGA";
export const ADD_CONTACT_SAGA = "ADD_CONTACTS_SAGA";
export const DELETE_CONTACT_SAGA = "DELETE_CONTACTS_SAGA";

export const setContactLoading = (payload) => ({ type: SET_CONTACT_LOADING, payload });
export const setContactError = (payload) => ({ type: SET_CONTACT_ERROR, payload });
export const setContactActionText = (payload) => ({ type: SET_CONTACT_ACTION_TEXT, payload });

export const setContactsSaga = (payload) => ({ type: SET_CONTACTS_SAGA, payload });
export const addContactSaga = (payload) => ({ type: ADD_CONTACT_SAGA, payload });
export const deleteContactSaga = (payload) => ({ type: DELETE_CONTACT_SAGA, payload });
