import { act } from "react-dom/test-utils";
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
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAILURE,
  LOG_OUT,
  CLEAR_USER_RESPONSE,
} from "./actions";

export const itemsReducer = (
  state = { items: [], response: {}, isLoading: false },
  action
) => {
  switch (action.type) {
    case GET_ITEMS_FETCH:
      return { ...state, isLoading: true };
    case GET_ITEMS_SUCCESS:
      return { ...state, items: action.items, isLoading: false };
    case GET_ITEMS_FAILURE:
      return { ...state, response: action.response, isLoading: false };
    case POST_ITEM_FETCH:
      return { ...state, isLoading: true };
    case POST_ITEM_SUCCESS:
      return {
        ...state,
        items: [action.item, ...state.items],
        isLoading: false,
      };
    case POST_ITEM_FAILURE:
      return { ...state, response: action.response, isLoading: false };
    case PUT_ITEM_FETCH:
      return { ...state, isLoading: true };
    case PUT_ITEM_SUCCESS:
      let newItems = [...state.items];
      let updatedItem = newItems.find(
        (element) => !!element?.[action.res.name[0]]
      )[action.res.name[0]];
      updatedItem.completion = action.res.completion;
      return {
        ...state,
        items: newItems,
        isLoading: false,
      };
    case PUT_ITEM_FAILURE:
      return { ...state, response: action.response, isLoading: false };
    default:
      return state;
  }
};

export const usersReducer = (
  state = {
    email: "",
    token: "",
    uid: "",
    response: {},
    isLoggedIn: false,
    isLoading: false,
  },
  action
) => {
  switch (action.type) {
    case SIGN_IN_FETCH:
      return { ...state, isLoading: true };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        email: action.response.email,
        token: action.response.idToken,
        uid: action.response.localId,
        response: action.response,
        isLoggedIn: true,
        isLoading: false,
      };
    case SIGN_IN_FAILURE:
      return { ...state, response: action.response, isLoading: false };
    case SIGN_UP_FETCH:
      return { ...state, isLoading: true };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        email: action.response.email,
        token: action.response.idToken,
        uid: action.response.localId,
        response: action.response,
        isLoggedIn: true,
        isLoading: false,
      };
    case SIGN_UP_FAILURE:
      return { ...state, response: action.response, isLoading: false };
    case GET_USER_DATA_FETCH:
      return { ...state, token: action.payload };
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        email: action.response.email,
        uid: action.response.localId,
        response: action.response,
        isLoggedIn: true,
        isLoading: false,
      };
    case GET_USER_DATA_FAILURE:
      return { ...state };
    case CHANGE_PASSWORD_FETCH:
      return { ...state, isLoading: true };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        token: action.response.idToken,
        response: action.response,
        isLoading: false,
      };
    case CHANGE_PASSWORD_FAILURE:
      return { ...state, response: action.response, isLoading: false };
    case CLEAR_USER_RESPONSE:
      return { ...state, response: {} };
    case LOG_OUT:
      return {
        ...state,
        email: "",
        token: "",
        uid: "",
        response: {},
        isLoggedIn: false,
        isLoading: false,
      };
    default:
      return state;
  }
};
