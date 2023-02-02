import { getContacts, addNewContact, deleteContact } from "../../../api/contacts";

export const SET_CONTACTS = "SET_CONTACTS";
export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const SET_CONTACT_ACTION_TEXT = "SET_CONTACT_ACTION_TEXT";

export const SET_CONTACT_LOADING = "SET_TODO_LOADING";
export const SET_CONTACT_ERROR = "SET_CONTACT_ERROR";

const setContactLoading = (payload) => ({ type: SET_CONTACT_LOADING, payload });
const setContactError = (payload) => ({ type: SET_CONTACT_ERROR, payload });
const setContactActionText = (payload) => ({ type: SET_CONTACT_ACTION_TEXT, payload });


export const setContacts = () => async (dispatch) => {
    dispatch(setContactActionText(null));
    dispatch(setContactError(null));
    dispatch(setContactLoading(true));

    try {
        const payload = await getContacts();
        dispatch({ type: SET_CONTACTS, payload });
    } catch (error) {
        dispatch(setContactError(error.message));
    } finally {
        dispatch(setContactLoading(false));
    }
};

export const addContact = (data) => async (dispatch) => {
    dispatch(setContactError(null));
    dispatch(setContactLoading(true));

    try {
        const payload = await addNewContact(data);
        dispatch({ type: ADD_CONTACT, payload });
    } catch (error) {
        dispatch(setContactError(error.message));
    } finally {
        dispatch(setContactLoading(false));
        dispatch(setContactActionText("save"));
    }
};

export const deleteContacts = (id) => async (dispatch) => {
    dispatch(setContactError(null));
    dispatch(setContactLoading(true));

    try {
        await deleteContact(id);
        dispatch({ type: DELETE_CONTACT, payload: id });
    } catch (error) {
        dispatch(setContactError(error.message));
    } finally {
        dispatch(setContactLoading(false));
        dispatch(setContactActionText("delete"));
    }
};
