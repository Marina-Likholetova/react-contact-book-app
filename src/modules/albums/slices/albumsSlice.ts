import { isError } from 'modules/common/utils/actionDefiners';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosRequestConfig } from "axios";
import albumsApi from "../services/albumsRequests";
import { IState } from 'entities/store/index';
import { Album } from 'entities/album';
import { Id } from 'entities/user/index';
import { isPendind } from 'modules/common/utils/actionDefiners';

const initialState: IState<Album> = {
    value: [],
    error: null,
    loading: false,
    actionText: null,
};

export const fetchAlbums = createAsyncThunk<Album[], AxiosRequestConfig<Album[]>, {rejectValue: string}>(
    "albums/fetchAlbums",
    async (params, {rejectWithValue}) => {
        try {
            const data = await albumsApi.getAlbums(params);
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

export const deleteAlbums = createAsyncThunk<Id, Id, {rejectValue: string}>(
    "albums/deleteAlbums",
    async (id, { rejectWithValue }) => {
        try {
            await albumsApi.deleteAlbum(id);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.message)
            } else {
                throw new Error("Error")
            }
        }

        return id;
    }
)


export const albumsSlice = createSlice({
    name: "albums",
    initialState,
    reducers: {}, 
    extraReducers: (builder) => {
        builder
            .addCase(fetchAlbums.fulfilled, (state, action) => {
                state.loading = false;
                state.value = action.payload;
            })
            .addCase(deleteAlbums.fulfilled, (state, action) => {
                state.loading = false;
                state.value = state.value.filter(album => album.id !== action.payload)
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

export default albumsSlice.reducer;
