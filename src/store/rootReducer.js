import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "modules/users/slices/usersSlice";
import albumsReducer from "modules/albums/slices/albumsSlice";
import photosReducer from "modules/albums/slices/photosSlice";


export default combineReducers({
    users: userReducer,
    albums: albumsReducer,
    photos: photosReducer,
})