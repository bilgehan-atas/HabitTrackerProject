import { useEffect } from "react";
import { takeEvery, call, put, fork } from "redux-saga/effects";
import {
  GET_ITEMS_FETCH,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
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

const itemsFetch = () => {
  return fetch("https://631359a3b466aa9b0397c51e.mockapi.io/b/todos").then(
    (response) => response.json()
  );
};

function* workGetItemsFetch() {
  const response = yield call(itemsFetch);
  if (response.error) {
    yield put({ type: GET_ITEMS_FAILURE, response });
  } else {
    const items = response.reverse();
    yield put({ type: GET_ITEMS_SUCCESS, items });
  }
}

export function* itemsSaga() {
  yield takeEvery(GET_ITEMS_FETCH, workGetItemsFetch);
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
