import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import albumsApi from "../services/albumsRequests";
import { setError, setLoading, setState } from "store/helpers/slices";

const initialState = {
    value: [],
    error: null,
    loading: false,
    actionText: null,
};

export const fetchAlbums = createAsyncThunk(
    "albums/fetchAlbums",
    async (params, {rejectWithValue}) => {
        try {
            const data = await albumsApi.getAlbums(params);
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const deleteAlbums = createAsyncThunk(
    "albums/deleteAlbums",
    async (id, { rejectWithValue, dispatch }) => {
        try {
            await albumsApi.deleteAlbum(id);
            dispatch(deleteAlbum(id));
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


export const albumsSlice = createSlice({
    name: "albums",
    initialState,
    reducers: {
        deleteAlbum: (state, { payload }) => {
            state.value = state.value.filter(album => album.id !== payload.id)
        }

    }, 
    extraReducers: {
        [fetchAlbums.pending]: setLoading,
        [deleteAlbums.pending]: setLoading,
        [fetchAlbums.fulfilled]: setState,
        [deleteAlbums.fulfilled]: (state) => { state.loading = false },
        [fetchAlbums.rejected]: setError,
        [deleteAlbums.rejected]: setError,

    }

})

export const { deleteAlbum } = albumsSlice.actions;
export default albumsSlice.reducer;
