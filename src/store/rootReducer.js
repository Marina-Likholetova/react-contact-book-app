import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/users/usersSlice";
import albumsReducer from "./slices/albums/albumsSlice";
import photosReducer from "./slices/photos/photosSlice";


export default combineReducers({
    users: userReducer,
    albums: albumsReducer,
    photos: photosReducer,
})