import { call, put, takeEvery } from "redux-saga/effects";
import { signUpFetch, signUpFetchSuccess } from "./userSlice";

function* workSignUpFetch(entered) {
  const response = yield call(() =>
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA_N6qTpBueVt_Ryh0uU493RqbPKen-_SY",
      {
        method: "POST",
        body: JSON.stringify({
          email: entered.payload.email,
          password: entered.payload.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  );
}

function* userSaga() {
  yield takeEvery("user/signUpFetch", workSignUpFetch);
}

export default userSaga;
