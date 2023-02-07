import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../../api/requests/usersRequests";
import { setError, setLoading } from "../../helpers/slices";

const initialState = {
    value: [],
    error: null,
    loading: false,
};

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async (_, {rejectWithValue}) => {
        try {
            const data = await userApi.getUsers();
            return data;
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)

export const fetchSingleUser = createAsyncThunk(
    "users/fetchSingleUser",
    async (id, { rejectWithValue }) => {
        try {
            const data = await userApi.getSingleUser(id);
            return data;
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)

export const createUser = createAsyncThunk(
    "users/createUser",
    async (payload, { rejectWithValue, dispatch }) => {
        try {
            const data = await userApi.createUser(payload);
            dispatch(addUser(data));
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)

export const deleteUser = createAsyncThunk(
    "users/deleteUser",
    async (id, { rejectWithValue, dispatch }) => {
        try {
            await userApi.deleteUser(id);
            dispatch(deleteUserById(id));
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)

export const updateUser = createAsyncThunk(
    "users/updateUser",
    async (payload, { rejectWithValue, dispatch, getState }) => {
        const user = getState().value.find(user => user.id === payload.id);
        try {
            const data = await userApi.updateUser(payload.id, {...user, payload});
            dispatch(changeUser(data));
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)


export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, { payload }) => {
            state.value.push(payload)
        },

        changeUser: (state, { payload }) => {
            state.value = state.value.map(user => user.id === payload.id ? payload : user)
        },

        deleteUserById: (state, { payload }) => {
            state.value = state.value.filter(user => user.id !== payload.id)
        }

    }, 
    extraReducers: {
        [fetchUsers.pending]: setLoading,
        [createUser.pending]: setLoading,
        [deleteUser.pending]: setLoading,
        [updateUser.pending]: setLoading,
        [fetchUsers.fulfilled]: (state, { payload }) => {
            state.value = payload;
            state.loading = false;
        },
        [createUser.fulfilled]: (state) => {state.loading = false},
        [deleteUser.fulfilled]: (state) => {state.loading = false},
        [updateUser.fulfilled]: (state) => {state.loading = false},
        [fetchUsers.rejected]: setError,
        [createUser.rejected]: setError,
        [deleteUser.rejected]: setError,
        [updateUser.rejected]: setError
    }

})

export const { addUser, deleteUserById, changeUser } = usersSlice.actions;

export default usersSlice.reducer;