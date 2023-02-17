import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../../api/requests/usersRequests";
import { setError, setLoading, setState } from "../../helpers/slices";

const initialState = {
    value: [],
    error: null,
    loading: false,
    actionText: null,
};

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async (_, { rejectWithValue }) => {
        try {
            const data = await userApi.getUsers();
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
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
            return rejectWithValue(error.message)
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
            return rejectWithValue(error.message)
        }
    }
)

export const deleteUser = createAsyncThunk(
    "users/deleteUser",
    async (id, { rejectWithValue, dispatch }) => {
        try {
            await userApi.deleteUser(id);
            dispatch(deleteUserById({ id }));
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const updateUser = createAsyncThunk(
    "users/updateUser",
    async (payload, { rejectWithValue, dispatch, getState }) => {
        const user = getState().users.value.find(user => user.id === payload.id);
        try {
            const data = await userApi.updateUser(payload.id, { ...user, ...payload });
            dispatch(changeUser(data));
        } catch (error) {
            return rejectWithValue(error.message)
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
            state.value = state.value.filter(user => user.id !== Number(payload.id))
        }, 

        cleanUpError: (state) => {
            state.error = null
        } 

    },
    extraReducers: {
        [fetchUsers.pending]: setLoading,
        [createUser.pending]: setLoading,
        [deleteUser.pending]: setLoading,
        [updateUser.pending]: setLoading,
        [fetchSingleUser.pending]: setLoading,
        [fetchUsers.fulfilled]: setState,
        [createUser.fulfilled]: (state) => { state.loading = false; state.actionText = "save" },
        [deleteUser.fulfilled]: (state) => { state.loading = false; state.actionText = "delete" },
        [updateUser.fulfilled]: (state) => { state.loading = false; state.actionText = "update" },
        [fetchSingleUser.fulfilled]: (state) => { state.loading = false },
        [fetchUsers.rejected]: setError,
        [createUser.rejected]: setError,
        [deleteUser.rejected]: setError,
        [updateUser.rejected]: setError,
        [fetchSingleUser.rejected]: setError
    }

})

export const { addUser, deleteUserById, changeUser, cleanUpError } = usersSlice.actions;

export default usersSlice.reducer;