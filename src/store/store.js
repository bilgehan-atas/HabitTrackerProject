import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import {
  // itemsSaga,
  // signUpSaga,
  // signInSaga,
  // changePasswordSaga,
  // getUserDataSaga,
  rootSaga,
} from "./sagas";
import { itemsReducer, usersReducer } from "./reducers";

const sagaMiddleWare = createSagaMiddleware();

const rootReducer = combineReducers({ itemsReducer, usersReducer });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);
// sagaMiddleWare.run(itemsSaga);
// sagaMiddleWare.run(signUpSaga);
// sagaMiddleWare.run(signInSaga);
// sagaMiddleWare.run(changePasswordSaga);
// sagaMiddleWare.run(getUserDataSaga);

export default store;
