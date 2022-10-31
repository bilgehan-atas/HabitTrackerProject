import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import itemsSlice from "./itemsSlice";
import itemsSaga from "./itemsSaga";
import userSaga from "./userSaga";
import userSlice from "./userSlice";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: [saga],
});
saga.run(itemsSaga);
saga.run(userSaga);

export default store;
