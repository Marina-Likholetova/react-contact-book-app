import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import {
    persistReducer, persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from "redux-persist";
import rootReducer from "./rootReducer";


const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }), logger]
})

export const persistor = persistStore(store);



