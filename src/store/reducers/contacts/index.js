import {
    SET_CONTACTS,
    SET_CONTACT_LOADING,
    DELETE_CONTACT,
    SET_CONTACT_ACTION_TEXT,
    SET_CONTACT_ERROR,
    ADD_CONTACT,
} from "../../actions/contacts";

const initialState = {
    value: [],
    isLoading: false,
    error: null,
    actionText: null,
};

export default function contactReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_CONTACTS:
            return { ...state, value: payload };
        case ADD_CONTACT:
            return { ...state, value: state.value.concat(payload) };
        case DELETE_CONTACT:
            return { ...state, value: state.value.filter((contact) => contact.id !== payload) };
        case SET_CONTACT_ACTION_TEXT:
            return { ...state, actionText: payload };
        case SET_CONTACT_LOADING:
            return { ...state, isLoading: payload };
        case SET_CONTACT_ERROR:
            return { ...state, error: payload };
        default:
            return state;
    }
}
