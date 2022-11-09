import { takeEvery, call, put, fork } from "redux-saga/effects";
import {
  GET_ITEMS_FETCH,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
  POST_ITEM_FETCH,
  POST_ITEM_SUCCESS,
  POST_ITEM_FAILURE,
  PUT_ITEM_FETCH,
  PUT_ITEM_SUCCESS,
  PUT_ITEM_FAILURE,
  SIGN_IN_FETCH,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_FETCH,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  CHANGE_PASSWORD_FETCH,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  GET_USER_DATA_FETCH,
  // GET_USER_DATA_FAILURE,
  GET_USER_DATA_SUCCESS,
} from "./actions";

// items saga

const itemsFetch = (payload) => {
  return fetch(
    `https://react-http-2ff0f-default-rtdb.europe-west1.firebasedatabase.app/users/${payload.payload.uid}/items.json?auth=${payload.payload.token}`
  ).then((response) => response.json());
};

function* workGetItemsFetch(payload) {
  const response = yield call(() => itemsFetch(payload));
  if (response === null) {
    let items = [];
    yield put({ type: GET_ITEMS_SUCCESS, items });
  } else if (response.error) {
    yield put({ type: GET_ITEMS_FAILURE, response });
  } else {
    let items = Object.entries(response).map((entry) => {
      return { [entry[0]]: entry[1] };
    });
    items = items.reverse();
    yield put({ type: GET_ITEMS_SUCCESS, items });
  }
}

const postItemFetch = (payload) => {
  return fetch(
    `https://react-http-2ff0f-default-rtdb.europe-west1.firebasedatabase.app/users/${payload.payload.uid}/items.json?auth=${payload.payload.token}`,
    {
      method: "POST",
      body: JSON.stringify({
        content: payload.payload.content,
        days: payload.payload.days,
        completion: " ",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((response) => response.json());
};

function* workPostItemFetch(payload) {
  const response = yield call(() => postItemFetch(payload));
  console.log(response);
  if (response.error) {
    yield put({ type: POST_ITEM_FAILURE, response });
  } else {
    let name = response.name;
    const item = {
      [name]: {
        content: payload.payload.content,
        days: payload.payload.days,
        completion: null,
      },
    };
    yield put({ type: POST_ITEM_SUCCESS, item });
  }
}

const putItemFetch = (payload) => {
  switch (payload.payload.method) {
    case "EDIT":
      return fetch(
        `https://react-http-2ff0f-default-rtdb.europe-west1.firebasedatabase.app/users/${payload.payload.uid}/items/${payload.payload.name}.json?auth=${payload.payload.token}`,
        {
          method: "PUT",
          body: JSON.stringify({
            content: payload.payload.content,
            days: payload.payload.days,
            completion: " ",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((response) => response.json());
    case "COMPLETION":
      return fetch(
        `https://react-http-2ff0f-default-rtdb.europe-west1.firebasedatabase.app/users/${payload.payload.uid}/items/${payload.payload.name}.json?auth=${payload.payload.token}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            completion: payload.payload.completion[0],
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((response) => response.json());
  }
};

function* workPutItemFetch(payload) {
  const response = yield call(() => putItemFetch(payload));
  if (response.error) {
    yield put({ type: PUT_ITEM_FAILURE, response });
  } else {
    let res = {
      completion: response.completion,
      name: payload.payload.name,
    };
    yield put({ type: PUT_ITEM_SUCCESS, res });
  }
}

export function* itemsSaga() {
  yield takeEvery(GET_ITEMS_FETCH, workGetItemsFetch);
  yield takeEvery(POST_ITEM_FETCH, workPostItemFetch);
  yield takeEvery(PUT_ITEM_FETCH, workPutItemFetch);
}

// users cookie management

const setCookie = (payload) => {
  const d = new Date();
  d.setTime(d.getTime + payload.exdays * 24 * 60 * 60 * 1000);
  let expires = "expires" + d.toUTCString();
  document.cookie =
    payload.cname + "=" + payload.cvalue + ";" + expires + ";path=/";
};

// signin saga

const signInFetch = (payload) => {
  return fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA_N6qTpBueVt_Ryh0uU493RqbPKen-_SY",
    {
      method: "POST",
      body: JSON.stringify({
        email: payload.payload.email,
        password: payload.payload.password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((response) => response.json());
};

function* workSignInFetch(payload) {
  const response = yield call(() => signInFetch(payload));
  if (response.error) {
    yield put({ type: SIGN_IN_FAILURE, response });
  } else {
    yield put({ type: SIGN_IN_SUCCESS, response });
    yield call(() =>
      setCookie({ cname: "token", cvalue: response.idToken, exdays: 3 })
    );
  }
}

export function* signInSaga() {
  yield takeEvery(SIGN_IN_FETCH, workSignInFetch);
}

// signup saga

const signUpFetch = (payload) => {
  return fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA_N6qTpBueVt_Ryh0uU493RqbPKen-_SY",
    {
      method: "POST",
      body: JSON.stringify({
        email: payload.payload.email,
        password: payload.payload.password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((response) => response.json());
};

function* workSignUpFetch(payload) {
  const response = yield call(() => signUpFetch(payload));
  if (response.error) {
    yield put({ type: SIGN_UP_FAILURE, response });
  } else {
    yield put({ type: SIGN_UP_SUCCESS, response });
    yield call(() =>
      setCookie({ cname: "token", cvalue: response.idToken, exdays: 3 })
    );
  }
}

export function* signUpSaga() {
  yield takeEvery(SIGN_UP_FETCH, workSignUpFetch);
}

// get user data

const getUserDataFetch = (payload) => {
  return fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyA_N6qTpBueVt_Ryh0uU493RqbPKen-_SY",
    {
      method: "POST",
      body: JSON.stringify({
        idToken: payload.payload,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((response) => response.json());
};

function* workGetUserData(payload) {
  let response = yield call(() => getUserDataFetch(payload));
  if (response.error) {
    console.log(response.error);
    // yield put({ type: GET_USER_DATA_FAILURE, response });
  } else {
    response = response.users[0];
    yield put({ type: GET_USER_DATA_SUCCESS, response });
  }
}

export function* getUserDataSaga() {
  yield takeEvery(GET_USER_DATA_FETCH, workGetUserData);
}

// change password

const changePasswordFetch = (payload) => {
  return fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA_N6qTpBueVt_Ryh0uU493RqbPKen-_SY",
    {
      method: "POST",
      body: JSON.stringify({
        idToken: payload.payload.token,
        password: payload.payload.password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((response) => response.json());
};

function* workChangePasswordFetch(payload) {
  const response = yield call(() => changePasswordFetch(payload));
  if (response.error) {
    yield put({ type: CHANGE_PASSWORD_FAILURE, response });
  } else {
    yield put({ type: CHANGE_PASSWORD_SUCCESS, response });
  }
}

export function* changePasswordSaga() {
  yield takeEvery(CHANGE_PASSWORD_FETCH, workChangePasswordFetch);
}

// others

export function* rootSaga() {
  yield fork(itemsSaga);
  yield fork(signInSaga);
  yield fork(signUpSaga);
  yield fork(getUserDataSaga);
  yield fork(changePasswordSaga);
}
