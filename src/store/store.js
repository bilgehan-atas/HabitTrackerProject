import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./sagas";
import { itemsReducer, usersReducer } from "./reducers";

const sagaMiddleWare = createSagaMiddleware();

const rootReducer = combineReducers({ itemsReducer, usersReducer });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

export default store;
