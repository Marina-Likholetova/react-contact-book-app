import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "./reducers/index";
import rootSaga from "./sagas/index";


const persistConfig = {
    key: "root",
    storage,
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware, logger));

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);


