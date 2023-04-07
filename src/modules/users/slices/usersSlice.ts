import {createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import userApi from "../services/usersRequests";
import { User, UserForm } from './../../../entities/user/index';
import { IState } from './../../../entities/store/index';
import { isError, isPendind } from "modules/common/utils/actionDefiners";

const initialState: IState<User> = {
    value: [],
    error: null,
    loading: false,
    actionText: null,
};

export const fetchUsers = createAsyncThunk<User[], undefined, {rejectValue: string}>(
    "users/fetchUsers",
    async (_, { rejectWithValue }) => {
        try {
            const data = await userApi.getUsers();
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.message)
            } else {
                throw new Error("Error")
           }
        }
    }
)

export const fetchSingleUser = createAsyncThunk<User, number, {rejectValue: string}>(
    "users/fetchSingleUser",
    async (id, { rejectWithValue }) => {
        try {
            const data = await userApi.getSingleUser(id);
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.message)
            } else {
                throw new Error("Error")
           }
        }
    }
)

export const createUser = createAsyncThunk<User, UserForm, {rejectValue: string}>(
    "users/createUser",
    async (payload, { rejectWithValue }) => {
        try {
            const data = await userApi.createUser(payload);
            return data;
        } catch (error) {
           if (axios.isAxiosError(error)) {
                return rejectWithValue(error.message)
            } else {
                throw new Error("Error")
           }
        }
    }
)

export const deleteUser = createAsyncThunk<string, string, {rejectValue: string}>(
    "users/deleteUser",
    async (id, { rejectWithValue }) => {
        try {
            await userApi.deleteUser(id);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.message)
           }
        }
        
        return id;
    }
)

export const updateUser = createAsyncThunk<User, User, {rejectValue: string, state: {users: IState<User> }}>(
    "users/updateUser",
    async (payload, { rejectWithValue, getState }) => {
        const user = getState().users.value.find(user => user.id === payload.id);
        try {
            const data = await userApi.updateUser(payload.id, { ...user, ...payload });
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.message)
            } else {
                throw new Error("Error")
            }
        }
    }
)


export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.value = action.payload;
                state.loading = false;
            })
            .addCase(fetchSingleUser.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.value.push(action.payload);
                state.actionText = "save";
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                state.value = state.value.map(user => user.id === action.payload.id ? action.payload : user);
                state.actionText = "update";
            }) 
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                state.value = state.value.filter(user => user.id !== Number(action.payload));
                state.actionText = "delete";
            })
            .addMatcher(isPendind, (state) => {
                state.error = null;
                state.actionText = null;
                state.loading = true;
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => { 
                state.error = action.payload;
                state.loading = false;
            })
    }
})

export default usersSlice.reducer;

