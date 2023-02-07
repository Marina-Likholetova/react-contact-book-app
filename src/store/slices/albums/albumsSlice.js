import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import albumsApi from "../../../api/requests/usersRequests";
import { setError, setLoading } from "../../helpers/slices";

const initialState = {
    value: [],
    error: null,
    loading: false,
};

export const fetchAlbums = createAsyncThunk(
    "album/fetchAlbums",
    async (id, { rejectWithValue}) => {
        try {
            const data = albumsApi.getAlbums();
            return data;
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)

export const deleteAlbums = createAsyncThunk(
    "album/deleteAlbums",
    async (id, { rejectWithValue, dispatch }) => {
        try {
            await albumsApi.deleteAlbums(id);
            dispatch(deleteAlbum(id));
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)


export const albumsSlice = createSlice({
    name: "album",
    initialState,
    reducers: {
        deleteAlbum: (state, { payload }) => {
            state.value = state.value.filter(album => album.id !== payload.id)
        }

    }, 
    extraReducers: {
        [fetchAlbums.pending]: setLoading,
        [deleteAlbums.pending]: setLoading,
        [fetchAlbums.fulfilled]: (state, { payload }) => {
            state.value = payload;
            state.loading = false;
        },
        [deleteAlbums.fulfilled]: (state) => { state.loading = false },
        [fetchAlbums.rejected]: setError,
        [deleteAlbums.rejected]: setError,

    }

})

export const { deleteAlbum } = albumsSlice.actions;
export default albumsSlice.reducer;
