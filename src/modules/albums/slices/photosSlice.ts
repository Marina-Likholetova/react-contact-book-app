import axios, { AxiosRequestConfig } from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import photosApi from "../services/photosRequests";
import { Photo } from 'entities/photo/index';
import { IState } from 'entities/store/index';
import { deleteAlbums } from './albumsSlice';
import { Id } from 'entities/user';
import { isError } from 'modules/common/utils/actionDefiners';
import { isPendind } from 'modules/common/utils/actionDefiners';


const initialState: IState<Photo> = {
    value: [],
    error: null,
    loading: false,
    actionText: null
}

export const fetchPhotos = createAsyncThunk<Photo[], AxiosRequestConfig<Photo[]>, {rejectValue: string}>(
    "photos/fetchPhotos",
    async (params, { rejectWithValue }) => {
        try {
            const data = await photosApi.getPhotos(params);
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


export const photosSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPhotos.fulfilled, (state, action) => {
                state.loading = false;
                state.value = action.payload;
            })
            .addCase(deleteAlbums.fulfilled, (state, action: PayloadAction<Id>) => {
                state.loading = false;
                state.value = state.value.filter(photo => photo.id !== action.payload);
            })
            .addMatcher(isPendind, (state) => {
                state.loading = true;
                state.error = null;
            }) 
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.loading = false;
                state.error = action.payload;
            }) 
    }
})

export default photosSlice.reducer;