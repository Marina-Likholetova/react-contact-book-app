import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/users/usersSlice";
import albumsReducer from "./slices/albums/albumsSlice";


export default combineReducers({
    users: userReducer,
    albums: albumsReducer,
})