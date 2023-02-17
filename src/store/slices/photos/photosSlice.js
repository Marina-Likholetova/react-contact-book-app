import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import photosApi from "../../../api/requests/photosRequests";
import { setError, setLoading, setState } from "../../helpers/slices";

const initialState = {
    value: [],
    error: null,
    loading: false,
}

export const fetchPhotos = createAsyncThunk(
    "photos/fetchPhotos",
    async (params, { rejectWithValue }) => {
        try {
            const data = await photosApi.getPhotos(params);
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }

)


export const photosSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {
        deletePhoto: (state, { payload }) => {
            state.value = state.value.filter(photo => photo.id !== payload.id);
        },

    },
    extraReducers: {
        [fetchPhotos.pending]: setLoading,
        [fetchPhotos.fulfilled]: setState,
        [fetchPhotos.rejected]: setError,
    }

})

export const { deletePhoto } = photosSlice.actions;
export default photosSlice.reducer;