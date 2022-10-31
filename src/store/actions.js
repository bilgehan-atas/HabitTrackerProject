//items
export const GET_ITEMS_FETCH = "GET_ITEMS_FETCH";
export const GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS";
export const GET_ITEMS_FAILURE = "GET_ITEMS_FAILURE";

// users > signin
export const SIGN_IN_FETCH = "SIGN_IN_FETCH";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";

// users > signup
export const SIGN_UP_FETCH = "SIGN_UP_FETCH";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

// users >  change password
export const CHANGE_PASSWORD_FETCH = "CHANGE_PASSWORD_FETCH";
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
export const CHANGE_PASSWORD_FAILURE = "CHANGE_PASSWORD_FAILURE";

// users > get user data
export const GET_USER_DATA_FETCH = "GET_USER_DATA_FETCH";
export const GET_USER_DATA_SUCCESS = "GET_USER_DATA_SUCCESS";
export const GET_USER_DATA_FAILURE = "GET_USER_DATA_FAILURE";

// users > other methods
export const LOG_OUT = "LOG_OUT";
export const CLEAR_USER_RESPONSE = "CLEAR_USER_RESPONSE";

export const getItemsFetch = () => ({
  type: GET_ITEMS_FETCH,
});

export const postSignInFetch = (payload) => ({
  type: SIGN_IN_FETCH,
  payload: payload,
});

export const postSignUpFetch = (payload) => ({
  type: SIGN_UP_FETCH,
  payload: payload,
});

export const logOut = {
  type: LOG_OUT,
};

export const getUserData = (payload) => ({
  type: GET_USER_DATA_FETCH,
  payload: payload,
});

export const clearUserResponse = {
  type: CLEAR_USER_RESPONSE,
};

export const postChangePassword = (payload) => ({
  type: CHANGE_PASSWORD_FETCH,
  payload: payload,
});
