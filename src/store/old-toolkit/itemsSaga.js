import { call, put, takeEvery } from "redux-saga/effects";
import { getItemsSuccess } from "./itemsSlice";

function* workGetItemsFetch() {
  const items = yield call(() =>
    fetch("https://631359a3b466aa9b0397c51e.mockapi.io/b/todos")
  );
  const jsonItems = yield items.json();
  const formattedItems = jsonItems.reverse();
  yield put(getItemsSuccess(formattedItems));
}

function* itemsSaga() {
  yield takeEvery("items/getItemsFetch", workGetItemsFetch);
}

export default itemsSaga;
